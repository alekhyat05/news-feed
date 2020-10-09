export class RSSNewsElement {
    title: string;
    author: string;
    description: string;
    pubdate: string;
    date: Date;

    constructor(title: string, author: string, description: string, pubdate: string, date: Date) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pubdate = pubdate;
        this.date = date;
    }
}
