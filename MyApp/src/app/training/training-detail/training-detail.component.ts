import { Component, OnInit } from '@angular/core';

import { ITraining } from '../training';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  pageTitle: string = 'Training Detail';
  training: ITraining;

  constructor() { }

  ngOnInit(): void {
  }

}
