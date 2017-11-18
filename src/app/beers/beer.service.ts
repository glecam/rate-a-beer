import { Injectable } from '@angular/core'
import { IBeer } from './beer';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BeerService {
    private _beerUrl = 'https://icapps-beers.herokuapp.com/beers';

    constructor(private _httpClient: HttpClient) {

    }

    getBeers(): Observable<IBeer[]> {
        const headers = new HttpHeaders().set("Authorization", "Token kVJzYfn9gRaGDFNrtMDuAexP");
        return null;
        
        // var temp = this._httpClient
        //     .get(this._beerUrl, { headers })
        //     .subscribe(data => { return data }, error => { console.log(error) })

        // console.log(temp);
    }
}