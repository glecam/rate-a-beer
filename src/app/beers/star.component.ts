import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
  selector: 'br-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 90 / 5; 
  }
}