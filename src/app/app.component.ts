import { Component } from '@angular/core';
import { MockBeerService } from './beers/mock.beer.service';
import { BeerService } from './beers/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeerService]
})

export class AppComponent {
  title = 'Rate a beer';
}
