import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service';
import { IBeer } from './beer';

@Component({
    selector: 'pm-beers',
    templateUrl: './beer-list.component.html',
})

export class BeerListComponent implements OnInit {

    ngOnInit(): void {
        console.log('on-init');
    }

    private _beerService;

    beers: IBeer[] = [];

    constructor(beerService: BeerService) {
        this._beerService = BeerService;
    }
}