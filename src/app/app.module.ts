import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beers/beer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatCardModule, MatSortModule, MatCheckboxModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { BeerService } from './beers/beer.service';
import { MockBeerService } from './beers/mock.beer.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StarComponent } from './beers/star.component';
import { BeerDetailComponent } from './beers/details/beer-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { NguiMapModule} from '@ngui/map';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BeerRatingComponent } from './beers/details/beer-rating/beer-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    StarComponent,
    BeerDetailComponent,
    ErrorComponent,
    BeerRatingComponent,    
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
    NguiMapModule,
    FlexLayoutModule,
    MatSnackBarModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCx4KkciH1TgUmXJ9goxgCNPvrWiR59Lfo'}),
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
