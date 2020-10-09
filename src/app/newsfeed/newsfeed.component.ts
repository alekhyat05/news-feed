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

    // Injecting the HttpClient into this component
    constructor(private httpClient: HttpClient) {
        this.rssNews = [];
    }

    ngOnInit(): void {
        this.loadFeed();
        this.progressBarState = true;
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
    }

}
