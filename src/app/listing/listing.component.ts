import { Component, OnInit } from '@angular/core';
import { Listing } from './listing'
import { ListingService } from './listing.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  listings: Listing[];

  ngOnInit() {
    this.getListings();
  }

  getListings(): void {
    // this .listings = this.listingService.getListings()
    this.listingService.getListings().subscribe(listings => this.listings = listings)
  }

}
