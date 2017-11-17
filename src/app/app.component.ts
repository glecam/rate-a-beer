import { Component } from '@angular/core';
import { MockBeerService } from './beers/mock.beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MockBeerService]
})

export class AppComponent {
  title = 'Welcome to rate a beer!';
}
