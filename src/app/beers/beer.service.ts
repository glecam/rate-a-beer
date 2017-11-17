import {Injectable} from '@angular/core'
import {IBeer} from './beer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BeerService{
    private _beerUrl = 'https://icapps-beers.herokuapp.com/beers';

    constructor(private _httpClient: HttpClient){
        
    }
    getBeers() : Observable<IBeer[]>{
        this._httpClient
        return this._httpClient.get<IBeer[]>(this._beerUrl)
        .do(data => console.log('Data: ' + JSON.stringify(data)))
        ;
    }

    private handleError(error: HttpErrorResponse){

    }
}