import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beers/beer-list.component';
import { HttpClientModule } from '@angular/common/http';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { BeerService } from './beers/beer.service';
import { MockBeerService } from './beers/mock.beer.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule
  ],
  providers: [MockBeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
