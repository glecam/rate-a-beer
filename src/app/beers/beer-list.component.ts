import { Component, OnInit, ViewChild } from '@angular/core';
import { MockBeerService } from './mock.beer.service';
import { IBeer } from './beer';
import { MatTableModule, MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'br-beers',
    styleUrls: ['beer-list.component.css'],
    templateUrl: './beer-list.component.html',
})

export class BeerListComponent implements OnInit {
    private _beerService;
    displayedColumns = ['thumbImageUrl', 'name', 'brewery', 'rating'];
    errorMessage: string;
    onlyShowRatedBeers;

    beers: IBeer[] = [];
    dataSource = null;
    @ViewChild(MatSort) sort: MatSort;
    constructor(beerService: MockBeerService) {
        this._beerService = beerService;
    }

    ngOnInit(): void {
        this.beers = this._beerService.getBeers();
        this.dataSource = new MatTableDataSource(this.beers);
        this.dataSource.filterPredicate = (data: IBeer, filter: string) => { return (filter == 'true') ? data.rating != null : true; };
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    handleChange(event) {
        this.dataSource.filter = this.onlyShowRatedBeers.toString();
    }
}