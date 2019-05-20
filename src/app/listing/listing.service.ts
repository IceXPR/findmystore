import { Injectable } from '@angular/core';
import { Listing } from '../listing/listing';
import { parseString } from 'xml2js'
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ListingService {

    listings: Listing[] = [];

    constructor(private http: Http) {
        this.http = http;
        this.loadData();
    }

    private loadData() {
        let _xml = this._xml
        let listings: Listing[] = this.listings

        this.http.get('http://localhost:8080/api').subscribe(
            function (response) {
                parseString(response.text(), function (err, result) {
                    if (err) {
                        console.debug("ERROR: " + err)
                    }

                    const data = result.rss.channel[0].item
                    for (const item of data) {
                        const listing = new Listing()
                        listing.title = item.title
                        listing.description = item.description
                        listing.link = item.link
                        listings.push(listing)
                    };
                });
            });
    }

    getListings(): Observable<Listing[]> {
        return of(this.listings);
    }
}

