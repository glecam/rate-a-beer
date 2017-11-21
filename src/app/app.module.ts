import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beers/beer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatCardModule, MatSortModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { BeerService } from './beers/beer.service';
import { MockBeerService } from './beers/mock.beer.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StarComponent } from './beers/star.component';
import { BeerDetailComponent } from './beers/details/beer-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    StarComponent,
    BeerDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    AngularFontAwesomeModule,   
    MatCardModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'beers', component: BeerListComponent },
      { path: 'beers/:id', component: BeerDetailComponent },
      { path: '', redirectTo: 'beers', pathMatch: 'full' }, //TODO Add home page      
      { path: '**', component: ErrorComponent }, //TODO add error page
    ])
  ],
  providers: [MockBeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
