import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beers/beer-list.component';
import { HttpClientModule } from '@angular/common/http';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { BeerService } from './beers/beer.service';
import { MockBeerService } from './beers/mock.beer.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StarComponent } from './beers/star.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    AngularFontAwesomeModule
  ],
  providers: [MockBeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
