import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { RSSNewsElement } from '../Models/RSSNewsElement';
import { DatePipe } from '@angular/common';

export const RSS_URL = "/cmlink/rss-topstories";

@Component({
    selector: 'app-newsfeed',
    templateUrl: './newsfeed.component.html',
    styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

    rssNews: Array<RSSNewsElement>;
    gridColumns: number = 2;
    progressBarState: boolean = true;

    response = `<?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:cbc="https://www.cbc.ca/rss/cbc" version="2.0">
        <channel>
            <title>
                <![CDATA[CBC | Top Stories News ]]>
            </title>
            <link>http://www.cbc.ca/news/?cmp=rss</link>
            <description>
                <![CDATA[
          FOR PERSONAL USE ONLY
          ]]>
        
            </description>
            <language>en-ca</language>
            <lastBuildDate>Mon, 12 Oct 2020 20:00:00 EDT</lastBuildDate>
            <copyright>
                <![CDATA[Copyright: (C) Canadian Broadcasting Corporation, http://www.cbc.ca/aboutcbc/discover/termsofuse.html#Rss]]>
            </copyright>
            <docs>
                <![CDATA[http://www.cbc.ca/rss/]]>
            </docs>
            <image>
                <title>CBC.ca</title>
                <url>https://www.cbc.ca/rss/image/cbc_144.gif</url>
                <link>https://www.cbc.ca/news/?cmp=rss</link>
            </image>
            <item cbc:type="story" cbc:deptid="2.633" cbc:syndicate="true">
                <title>
                    <![CDATA[5 ways the U.S. election result could impact Canada]]>
                </title>
                <link>https://www.cbc.ca/news/world/5-ways-the-u-s-election-result-could-impact-canada-1.5753574?cmp=rss</link>
                <guid isPermaLink="false">1.5753574</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>CBC News</author>
                <category>News/World</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5744133.1601429545!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/biden-trump-debate-composite.jpg' alt='biden trump debate composite ' width='460' title='' height='259' /><p>The fallout from an American election touches countries around the world — starting with its neighbours next door. And on some issues with clear implications for Canada, Joe Biden and Donald Trump offer contrasting positions.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.636" cbc:syndicate="true">
                <title>
                    <![CDATA['They chose the wrong person': Pierre Laporte's son reflects on his murder 50 years after October Crisis]]>
                </title>
                <link>https://www.cbc.ca/news/politics/pierre-laporte-jean-laporte-october-crisis-1.5758367?cmp=rss</link>
                <guid isPermaLink="false">1.5758367</guid>
                <pubDate>Mon, 12 Oct 2020 20:00:00 EDT</pubDate>
                <author>Peter Zimonjic,Rosemary Barton</author>
                <category>News/Politics</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5758735.1602360568!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/pierre-laporte.jpg' alt='PIERRE LAPORTE' width='460' title='Mrs. Pierre Laporte (veiled) is escorted by her son Jean and daughter Claire as they follow the casket after funeral services for the Quebec Labour minister at Notre Dame Church in downtown Montreal Tuesday, Oct. 20, 1970. Mr. Laporte was kidnapped from his home Oct. 20 and killed Saturday when ransom demands by the terrorist group Front de Liberation Quebec, FLQ, were not met. (CP PHOTO/Peter Bregg)' height='259' /><p>The kidnapping and murder of Pierre Laporte was, for the tight-knit Laporte family, not about historical significance but about the loss of a cherished father, husband, brother and uncle. And for his son Jean, the death meant losing the “king of the world."</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.633" cbc:syndicate="true">
                <title>
                    <![CDATA[Trump holds rally in Florida 10 days after COVID-19 disclosure, declaring himself 'powerful']]>
                </title>
                <link>https://www.cbc.ca/news/world/trump-election-campaign-florida-1.5759498?cmp=rss</link>
                <guid isPermaLink="false">1.5759498</guid>
                <pubDate>Mon, 12 Oct 2020 10:36:24 EDT</pubDate>
                <author>The Associated Press</author>
                <category>News/World</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759850.1602546943!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_460/usa-election-trump.JPG' alt='USA-ELECTION/TRUMP' width='460' title='U.S. President Donald Trump gestures during a campaign rally, his first since being treated for the coronavirus disease (COVID-19), at Orlando Sanford International Airport in Sanford, Florida, U.S., October 12, 2020.  ' height='259' /><p>U.S. President Donald Trump returned to the campaign trail Monday, holding his first rally since he contracted the coronavirus.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.638" cbc:syndicate="true">
                <title>
                    <![CDATA[Coronavirus: What's happening in Canada and around the world on Monday]]>
                </title>
                <link>https://www.cbc.ca/news/canada/world-canada-covid-19-oct-12-1.5759410?cmp=rss</link>
                <guid isPermaLink="false">1.5759410</guid>
                <pubDate>Mon, 12 Oct 2020 09:42:39 EDT</pubDate>
                <author>The Canadian Press</author>
                <category>News/Canada</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759543.1602517215!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/covid-que-20201011.jpg' alt='COVID Que 20201011' width='460' title='A healthcare worker instructs a young man to disinfect his hands outside a COVID-19 testing clinic Montreal, Sunday, October 11, 2020, as the COVID-19 pandemic continues in Canada and around the world.THE CANADIAN PRESS/Graham Hughes' height='259' /><p>Canadians who have missed work because of COVID-19 can start applying for a new financial support from the federal government today. Here's a look at COVID-19 news from Canada and around the world.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.636" cbc:syndicate="true">
                <title>
                    <![CDATA[Technical glitches briefly mar first day of applications for Canada Recovery Benefit]]>
                </title>
                <link>https://www.cbc.ca/news/politics/canada-recovery-benefit-applications-open-covid-1.5759421?cmp=rss</link>
                <guid isPermaLink="false">1.5759421</guid>
                <pubDate>Mon, 12 Oct 2020 08:37:18 EDT</pubDate>
                <author>CBC News</author>
                <category>News/Politics</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5537049.1587507620!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_460/covid-canada-20200416.jpg' alt='COVID Canada 20200416' width='460' title='A &#39;Closed&#39; sign hangs in a store window in Ottawa, Thursday April 16, 2020. ' height='259' /><p>Canadians seeking to access new financial support after missing work because of COVID-19 appeared to briefly run into technical glitches as applications opened for the Canada Recovery Benefit on Monday.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.657" cbc:syndicate="true">
                <title>
                    <![CDATA[Fox News host's (mis)pronunciation of Ottawa puts spotlight on word's Indigenous origins]]>
                </title>
                <link>https://www.cbc.ca/news/canada/ottawa/tucker-carlson-ottawa-indigenous-1.5759031?cmp=rss</link>
                <guid isPermaLink="false">1.5759031</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Ryan Patrick Jones</author>
                <category>News/Canada/Ottawa</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759044.1602440308!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/tucker-carlson-ottawa-composite.jpg' alt='Tucker Carlson Ottawa composite' width='460' title='Tucker Carlson, host of the Fox News show Tucker Carlson Tonight, is shown in a 2017 publicity photo.  Carlson&#39;s perceived mispronunciation of Ottawa during a Friday segment set off a social media firestorm, but several Indigenous people pointed out the way he said the word better resembles its origin as an Anishnaabemowin word than the common English pronunciation.' height='259' /><p>When Fox News host Tucker Carlson appeared to mispronounce the name of Canada's capital in a segment on his U.S. prime-time TV show, he may have actually been closer to the mark than many realize.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.652" cbc:syndicate="true">
                <title>
                    <![CDATA[Man, 30, charged with 2nd-degree murder in deaths of boys from Wendake, Que.]]>
                </title>
                <link>https://www.cbc.ca/news/canada/montreal/wendake-quebec-boys-death-1.5759424?cmp=rss</link>
                <guid isPermaLink="false">1.5759424</guid>
                <pubDate>Mon, 12 Oct 2020 08:19:18 EDT</pubDate>
                <author>CBC News</author>
                <category>News/Canada/Montreal</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759429.1602503777!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/memorial-for-wendake-boys.jpg' alt='Memorial for Wendake boys' width='460' title='People gather at a memorial outside Notre-Dame-de-Lorette church in Wendake, Que., Sunday afternoon to pay tribute to two boys who were killed.' height='259' /><p>Members of the community gathered at a makeshift memorial Sunday to pay homage to two boys, ages 2 and 5, from Wendake, Que., who were found dead earlier that day. A man has been charged with second-degree murder in connection with their deaths.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.641" cbc:syndicate="true">
                <title>
                    <![CDATA[After 37 years, convicted B.C. child killer to argue wrongful conviction]]>
                </title>
                <link>https://www.cbc.ca/news/canada/british-columbia/tallio-murder-wrongful-conviction-1.5758075?cmp=rss</link>
                <guid isPermaLink="false">1.5758075</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Jason Proctor</author>
                <category>News/Canada/British Columbia</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5758133.1602282387!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/phillip-tallio.jpg' alt='Phillip Tallio' width='460' title='Phillip Tallio is seen in a recent photograph taken by his brother while he is living under bail conditions. Tallio will be in the B.C. Court of Appeal this week asking to withdraw a guilty plea he made in 1983 to second-degree murder.' height='259' /><p>Phillip Tallio will testify in B.C.'s Court of Appeal this week in a bid to undo what his lawyers claim was a wrongful conviction. Tallio claims he spent nearly four decades in jail for the murder of a toddler that he did not commit.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.635" cbc:syndicate="true">
                <title>
                    <![CDATA[Becoming Diana: Emma Corrin on playing the Princess of Wales in Season 4 of The Crown]]>
                </title>
                <link>https://www.cbc.ca/news/entertainment/diana-the-crown-emma-corrin-1.5757000?cmp=rss</link>
                <guid isPermaLink="false">1.5757000</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Janet Davison</author>
                <category>News/Entertainment</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5757252.1602262977!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/the-crown-s4.jpg' alt='The Crown S4' width='460' title='Picture shows: Princess Diana (EMMA CORRIN)' height='259' /><p>There is, perhaps, an irony in the experience of taking on the role of Diana, Princess of Wales, in Netflix’s hit drama The Crown.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.633" cbc:syndicate="true">
                <title>
                    <![CDATA[Republicans schedule vote to approve Amy Coney Barrett's nomination before the Nov. 3 election]]>
                </title>
                <link>https://www.cbc.ca/news/world/us-supreme-court-amy-coney-barrett-senate-confirmation-hearings-1.5759452?cmp=rss</link>
                <guid isPermaLink="false">1.5759452</guid>
                <pubDate>Mon, 12 Oct 2020 09:12:17 EDT</pubDate>
                <author>The Associated Press</author>
                <category>News/World</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759682.1602529728!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_460/usa-court-barrett.JPG' alt='USA-COURT/BARRETT' width='460' title='U.S. Supreme Court nominee Amy Coney Barrett is sworn in during her confirmation hearing before the Senate Judiciary Committee on Capitol Hill in Washington , D.C., U.S., October 12, 2020.' height='259' /><p>The U.S. Senate judiciary committee has scheduled a vote to approve Judge Amy Coney Barrett's nomination to the Supreme Court — before her confirmation hearings have even ended.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.641" cbc:syndicate="true">
                <title>
                    <![CDATA[Researchers hopeful bus-sized sharks will return in abundance to B.C. waters]]>
                </title>
                <link>https://www.cbc.ca/news/canada/british-columbia/basking-sharks-bc-recovery-wildlife-1.5758774?cmp=rss</link>
                <guid isPermaLink="false">1.5758774</guid>
                <pubDate>Mon, 12 Oct 2020 07:00:00 EDT</pubDate>
                <author>Chad Pawson</author>
                <category>News/Canada/British Columbia</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.3618933.1602522064!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/basking-shark-divers.jpg' alt='Basking shark divers' width='460' title='Basking sharks are very large and use their gaping mouths to feed on tiny plankton at the surface of the water, as seen in this undated photo with human divers.' height='259' /><p>It's been 10 years since basking sharks were deemed endangered in Canada. Researchers say despite only two to three sightings a year in B.C. waters of the giant fish, they're hopeful for an eventual abundant return of the animal.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="contentpackage" cbc:deptid="2.630" cbc:syndicate="true">
                <title>
                    <![CDATA[The latest on the coronavirus outbreak for Oct. 12]]>
                </title>
                <link>https://www.cbc.ca/news/canada/coronavirus-newsletter-oct-12-1.5759703?cmp=rss</link>
                <guid isPermaLink="false">1.5509956</guid>
                <pubDate>Wed, 25 Mar 2020 18:32:19 EDT</pubDate>
                <author></author>
                <category>News</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5692510.1597867826!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/coronavirus-evening-brief.jpg' alt='Coronavirus evening brief' width='460' title='Coronavirus evening brief' height='259' /><p></p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.637" cbc:syndicate="false">
                <title>
                    <![CDATA[Canadians are rich, but this Thanksgiving, our well-being is trickier to measure]]>
                </title>
                <link>https://www.cbc.ca/news/business/canadians-economics-thanksgiving-1.5757746?cmp=rss</link>
                <guid isPermaLink="false">1.5757746</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Don Pittis</author>
                <category>News/Business</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5757747.1602277636!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/canada-weather.jpg' alt='CANADA-WEATHER/' width='460' title='People sit on a bench on a warm autumn day at Rideau Hall in Ottawa, Ontario, Canada, October 23, 2017. REUTERS/Chris Wattie' height='259' /><p>Gross domestic product can only tell us so much about our well-being, but finding a different measure of what to be thankful for is not easy.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.634" cbc:syndicate="true">
                <title>
                    <![CDATA[Facebook bans Holocaust denial, distortion posts]]>
                </title>
                <link>https://www.cbc.ca/news/technology/facebook-bans-holocaust-denial-content-1.5759509?cmp=rss</link>
                <guid isPermaLink="false">1.5759509</guid>
                <pubDate>Mon, 12 Oct 2020 11:06:57 EDT</pubDate>
                <author>The Associated Press</author>
                <category>News/Technology &amp; Science</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759524.1602514166!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/facebook-civil-rights-meetings.jpg' alt='Facebook Civil Rights Meetings' width='460' title='FILE - In this Oct. 25, 2019, file photo, Facebook CEO Mark Zuckerberg speaks at the Paley Center in New York.  Zuckerberg and Chief Operating Officer Sheryl Sandberg met with civil rights leaders Tuesday, July 7, 2020, including the organizers of a widespread advertising boycott of the social network over hate speech on its platform, in an effort to convince critics that it is doing everything it can to rid its service of hate, abuse and misinformation. (AP Photo/Mark Lennihan)' height='259' /><p>Facebook CEO Mark Zuckerberg says the site is banning posts that deny or distort the Holocaust and will start directing people to authoritative sources if they search for information about the Nazi genocide.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.633" cbc:syndicate="true">
                <title>
                    <![CDATA[In battleground Pennsylvania, meet some of the suburban women who could decide Donald Trump's fate]]>
                </title>
                <link>https://www.cbc.ca/news/world/in-battleground-pennsylvania-meet-some-of-the-suburban-women-who-could-decide-donald-trump-s-fate-1.5755950?cmp=rss</link>
                <guid isPermaLink="false">1.5755950</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Steven D&apos;Souza</author>
                <category>News/World</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5757634.1602271035!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/pennsylvania-voters-composite.jpg' alt='pennsylvania voters composite' width='460' title='From left: Sarah Becker, Olivia Braccio, Sandy Arnell, Pauline Braccio, some of the suburban women who could tip the result of the election in Pennsylvania.' height='259' /><p>There's a movement growing in the suburbs of Pennsylvania that could hand the battleground state to Joe Biden and the Democrats. Republican women, disaffected with the president, are increasingly looking to vote against Donald Trump — and their impact could sway the election.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.636" cbc:syndicate="false">
                <title>
                    <![CDATA[COVID-19 is changing the way men and women split the risk in the workplace]]>
                </title>
                <link>https://www.cbc.ca/news/politics/covid-pandemic-gender-1.5754089?cmp=rss</link>
                <guid isPermaLink="false">1.5754089</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Evan Dyer</author>
                <category>News/Politics</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5741024.1601226289!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_460/covid-testing.jpg' alt='COVID testing' width='460' title='A medical worker wears a surgical mask, face shield, and gloves, conducting a COVID-19 test on an unidentified man in Montreal, Quebec.' height='259' /><p>The most dangerous jobs in Canada have tended to be ones dominated by men. But the pandemic is shifting some of the risk to female-dominated professions in health care, retail and social services — risk that workers' advocates say should come with better pay and protections.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.637" cbc:syndicate="true">
                <title>
                    <![CDATA[Americans Milgrom, Wilson win Nobel in economics for 'improvements to auction theory']]>
                </title>
                <link>https://www.cbc.ca/news/business/nobel-economics-2020-1.5759390?cmp=rss</link>
                <guid isPermaLink="false">1.5759390</guid>
                <pubDate>Mon, 12 Oct 2020 02:34:09 EDT</pubDate>
                <author>The Associated Press</author>
                <category>News/Business</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759433.1602505519!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/sweden-nobel-economics.jpg' alt='Sweden Nobel Economics' width='460' title='Winners of the Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel for 2020 at a press conference in Stockholm, Monday Oct. 12, 2020. Americans Paul R. Milgrom, left, and Robert B. Wilson have won the Nobel Prize in economics for "improvements to auction theory and inventions of new auction formats." ' height='259' /><p>Two Americans won the Nobel in economics on Monday for improving the theory of how auctions work and inventing new and better auction formats that are now woven into many parts of the economy, including one that revolutionized the telecom industry.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.633" cbc:syndicate="true">
                <title>
                    <![CDATA[Women in Egypt thronging to social media to reveal sexual assaults, hold abusers to account]]>
                </title>
                <link>https://www.cbc.ca/news/world/egypt-women-social-media-assaults-1.5756098?cmp=rss</link>
                <guid isPermaLink="false">1.5756098</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Margaret Evans</author>
                <category>News/World</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5756253.1602197696!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_460/egypt-harassment.jpg' alt='Egypt Harassment' width='460' title='FILE - In this May 24, 2013 file photo, a mural with Arabic that reads "no harassment," is seen on a wall in Cairo, Egypt.  A video from Egypt showing a woman enduring a mob sexual assault on New Year&#39;s Eve was deemed authentic by the country&#39;s police Thursday, Jan. 2, 2020. The viral video has reignited long-running controversy over rampant sexual harassment in Egypt. Cases of mob violence against women have been caught on tape since the 2000s.(AP Photo/Hassan Ammar, File)' height='259' /><p>In Cairo, secrets long suppressed have been rising to the surface — and with them hopes the country may be experiencing a feminist movement capable of challenging the culture of impunity that has long accompanied gender-based violence in Egypt.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.633" cbc:syndicate="true">
                <title>
                    <![CDATA[Daily lives of Italians during pandemic lockdown preserved by photojournalists at new exhibit]]>
                </title>
                <link>https://www.cbc.ca/news/world/italians-pandemic-lockdown-photos-exhibit-1.5759042?cmp=rss</link>
                <guid isPermaLink="false">1.5759042</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Megan Williams</author>
                <category>News/World</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759072.1602438387!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/untitled-document-image-10.jpg' alt='Untitled document Image 10' width='460' title='Foreign Correspondents, with Megan Williams in front of the Coloseum, reporting during the lockdown in March. Credit: Megan Williams' height='259' /><p>Lockdown Italia: As Seen by the Foreign Press, a new exhibit in Rome, features the work of 73 photographers who capture the exhaustion of health-care workers, follow funerals and portray moments of everyday generosity and community across balconies.</p>
            ]]>
          
                </description>
            </item>
            <item cbc:type="story" cbc:deptid="2.659" cbc:syndicate="true">
                <title>
                    <![CDATA[Syrian refugees finish quarantine in time for first Canadian Thanksgiving]]>
                </title>
                <link>https://www.cbc.ca/news/canada/saskatchewan/canada-thanksgiving-refugees-syria-1.5757822?cmp=rss</link>
                <guid isPermaLink="false">1.5757822</guid>
                <pubDate>Mon, 12 Oct 2020 04:00:00 EDT</pubDate>
                <author>Bonnie Allen</author>
                <category>News/Canada/Saskatchewan</category>
                <description>
                    <![CDATA[
                            <img src='https://i.cbc.ca/1.5759116.1602441847!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/airport-reunion-refugee.jpg' alt='airport reunion refugee' width='460' title='Syrian refugees Mahmoud Al Khalif and his family were unable to hug their relatives, who they hadn&#39;t seen in five years, when they arrived at Regina International Airport on September 21, 2020.' height='259' /><p>Syrian refugees who waited years to be allowed into Canada to reunite with family had their arrival delayed another six months by the pandemic. Now, the Al Khalif family has finished their 14-quarantine period in time to celebrate their first Canadian Thanksgiving.</p>
            ]]>
          
                </description>
            </item>
        </channel>
    </rss>`;


    // Injecting the HttpClient into this component
    constructor(private httpClient: HttpClient) {
        this.rssNews = [];
    }

    ngOnInit(): void {
        this.progressBarState = true;
        this.loadFeed();
        this.progressBarState = false;
    }

    // Extract the description from description tag of XML with in p tag
    extractDescription(descriptionString: string) {
        let splitString = descriptionString.split("<p>");

        if (splitString.length > 1) {
            return splitString[1].split("</p>")[0];
        }

        return descriptionString;
    }

    // Formatting publication date to desired format
    formatTime(dateTime: string) {
        let convertedDate = dateTime.length === 0 ? "No Date Available" 
            : new DatePipe('en-US').transform(new Date(dateTime), "MMM dd, hh:mm aaa");
        return convertedDate;
    }

    // Load the RSS feed using http get
    loadFeed() {
        const requestOptions: Object = {
            responseType: 'text/xml'
        };

        const parser = new xml2js.Parser({ strict: false, trim: true });
        parser.parseString(this.response, (err, result) => {
            var resultRSSItems = result.RSS.CHANNEL[0].ITEM;

            // iterate through the items in RSS feed and put it on Array of objects
            for (var i = 0; i < resultRSSItems.length; i++) {
                console.log(resultRSSItems[i]);
                let descriptionString = this.extractDescription(resultRSSItems[i].DESCRIPTION[0]).length === 0
                    ? "No Description Available"
                    : this.extractDescription(resultRSSItems[i].DESCRIPTION[0]);
                let convertedDate = this.formatTime(resultRSSItems[i].PUBDATE);
                let author = resultRSSItems[i].AUTHOR[0].length === 0 ? "Unknown Author" : resultRSSItems[i].AUTHOR;
                let title = resultRSSItems[i].TITLE[0].length === 0 ? "Unknown Title" : resultRSSItems[i].TITLE;

                // push RSS item into array
                this.rssNews.push(new RSSNewsElement(title,
                    author,
                    descriptionString,
                    convertedDate,
                    new Date(resultRSSItems[i].PUBDATE)));
            }

            // sort the RSS object array in descending order (most recent news first)
            this.rssNews.sort((a, b) => (a.date > b.date) ? -1 : 1);
        });

        /*
        var response = this.httpClient.get<any>(RSS_URL, requestOptions)
            .subscribe(res => {
                const parser = new xml2js.Parser({ strict: false, trim: true });
                parser.parseString(res, (err, result) => {
                    var resultRSSItems = result.RSS.CHANNEL[0].ITEM;

                    // iterate through the items in RSS feed and put it on Array of objects
                    for (var i = 0; i < resultRSSItems.length; i++) {
                        console.log(resultRSSItems[i]);
                        let descriptionString = this.extractDescription(resultRSSItems[i].DESCRIPTION[0]).length === 0
                            ? "No Description Available"
                            : this.extractDescription(resultRSSItems[i].DESCRIPTION[0]);
                        let convertedDate = this.formatTime(resultRSSItems[i].PUBDATE);
                        let author = resultRSSItems[i].AUTHOR[0].length === 0 ? "Unknown Author" : resultRSSItems[i].AUTHOR;
                        let title = resultRSSItems[i].TITLE[0].length === 0 ? "Unknown Title" : resultRSSItems[i].TITLE;
                        
                        // push RSS item into array
                        this.rssNews.push(new RSSNewsElement(title,
                            author,
                            descriptionString,
                            convertedDate,
                            new Date(resultRSSItems[i].PUBDATE)));
                    }

                    // sort the RSS object array in descending order (most recent news first)
                    this.rssNews.sort((a, b) => (a.date > b.date) ? -1 : 1);
                    this.progressBarState = false;
                });
            });
        */
    }

}
