import { Component, OnInit } from '@angular/core';
import { MockBeerService } from './mock.beer.service';
import { IBeer } from './beer';
import { MatTableModule, MatTableDataSource } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'br-beers',
    styleUrls: ['beer-list.component.css'],
    templateUrl: './beer-list.component.html',
})

export class BeerListComponent implements OnInit {
    errorMessage: string;
    private _beerService;
    displayedColumns = ['thumbImageUrl', 'name', 'brewery', 'rating'];

    beers: IBeer[] = [];
    dataSource = null;

    constructor(beerService: MockBeerService) {
        this._beerService = beerService;
    }

    ngOnInit(): void {
        this.beers = this._beerService.getBeers();
        this.dataSource = new MatTableDataSource(this.beers);
    }
}