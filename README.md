#How to run:
-----------
1) Open the project in IDE
2) In terminal, run "npm install" (make sure you are in the project directory)
3) In terminal, run "ng serve" ( provided you have already installed Angular)
4) In browser, hit the localhost URL given in the message which you recieve while running "ng serve" command


#FYI:
----
1) Requirement for publication date and time (eg:May 29, 11:00) doesn't specify whether the month should be in 3 letter abbreviated form or full name of month. So, I have assumed that you are looking for full name of the month and written the code.

2) For requirement for author name as first name followed by last name, the XML has only one tag - <author> with the full name. There is no real definition/split between the first name and last name. Also, the name of the firms like - "The Canadian Press" has been used as author name for some of the entries. Hence, I have displayed the author name exactly as mentioned in XML data.

3) For requirement for author name, there are some stories which doesn't have author name in XML itself, for these cases I made a default author name as "unknown author".

4) For requirement for description section, there are some stories which doesn't have description in XML itself, for these cases I made a default description as "No Description Availabe".

5) For requirement for title section, there are some stories which doesn't have title in XML itself, for these cases I made a default description as "Unknown Title".

6) For requirement for date section, there are some stories which doesn't have date in XML itself, for these cases I made a default description as "No Date Available".

7) For some stories, the title name may extend more than one line. Since there is no requirement mentioned to ellipsis for title, I have displayed the complete title name, unlike for description where i have used ellipsis for content for than 3 lines.

8) In the mockup image, there is no author name for mobile view. So I have assumed that the author name is not needed for mobile view and wrote the code to hide the author name for mobile view alone.

9) In order to avoid CORS issue, I have written code to enable CORS with Proxy Configuration Settings (proxy.config.json file) in Angular.
