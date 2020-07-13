import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges{

  @Input() rating: number = 4;
  starWith: number;

  @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWith = this.rating * 75 / 5;
  }

  OnClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked !`);
  }


}
