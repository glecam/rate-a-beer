import { Component, OnInit } from '@angular/core';
import { MockBeerService } from './mock.beer.service';
import { IBeer } from './beer';

@Component({
    selector: 'br-beers',
    templateUrl: './beer-list.component.html',
})

export class BeerListComponent implements OnInit {
    errorMessage: string;
    private _beerService;

    beers: IBeer[] = [];

    constructor(beerService: MockBeerService) {
        this._beerService = beerService;
    }

    ngOnInit(): void {
        console.log('on-init');
        this.beers = this._beerService.getBeers()
        .subscribe(beers => this.beers = beers, error => this.errorMessage = error);
    }
}