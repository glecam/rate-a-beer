import { Component, OnInit } from '@angular/core';
import { IBeer } from '../beer';
import { ActivatedRoute } from '@angular/router';
import { MockBeerService } from '../mock.beer.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material';

@Component({
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  map: any;

  beer: IBeer;
  private _verticalSnackBarPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _route: ActivatedRoute, private _beerService: MockBeerService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.beer = this._beerService.getBeerById(id);
  }

  ratingChanged(beerRating: any): void {
    console.log(beerRating.rating);
    // this._beerService.getBeerById
    this.openSnackBar("✔ Rating updated successfully", "success-snackbar");
    // this.openSnackBar("✘ Rating updated successfully", "success-snackbar");
  }

  openSnackBar(message: string, extraClass: string) {
    this.snackBar.open(message, null, {
      duration: 1500,
      verticalPosition: this._verticalSnackBarPosition,
      extraClasses: [extraClass]
    });
  }

  initMap(event: any) {
    this.map = event;
  }
  
  //https://github.com/ng2-ui/map/issues/141  
  refreshMap() {
    google.maps.event.trigger(this.map, 'resize');
  }
}
