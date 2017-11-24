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

  beer: IBeer;
  marker = {
    display: true,
    lat: null,
    lng: null,
  };
  constructor(private _route: ActivatedRoute, private _beerService: MockBeerService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.beer = this._beerService.getBeerById(id);
  }

  ratingChanged(beerRating: any): void {
    console.log(beerRating.rating);
    this._beerService.getBeerById
   this.openSnackBar("success");
  }

  openSnackBar(message: string) {
    let verticalPosition: MatSnackBarVerticalPosition = 'top';
    
    this.snackBar.open(message, null, {
      duration: 1500, verticalPosition: verticalPosition
    });
  }
}
