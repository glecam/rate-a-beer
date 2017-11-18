import { Component, OnInit } from '@angular/core';
import { IBeer } from '../beer';
import { ActivatedRoute } from '@angular/router';
import { MockBeerService } from '../mock.beer.service';

@Component({
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: IBeer;

  constructor(private _route: ActivatedRoute, private _beerService: MockBeerService) {
    
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
   this.beer = this._beerService.getBeerById(id);
  }

}
