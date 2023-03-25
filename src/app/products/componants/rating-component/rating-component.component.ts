import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.scss']
})
export class RatingComponentComponent implements OnInit {
  @Input() rate: number=0 // The rating value from 1 to 5

  ratings: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
