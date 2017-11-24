import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'beer-rating',
  templateUrl: './beer-rating.component.html',
  styleUrls: ['./beer-rating.component.css']
})
export class BeerRatingComponent implements OnInit {

  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
    });
  }
}
