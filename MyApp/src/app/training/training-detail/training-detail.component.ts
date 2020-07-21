import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITraining } from '../training';
import { TrainingService } from '../training.service';




@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  pageTitle: string = 'Training Detail';
  training: ITraining;



  constructor( private route: ActivatedRoute, private trainingService: TrainingService) { }

  ngOnInit(): void {

  let id = this.route.snapshot.params['id'];
    this.trainingService.getTrainingById(id).subscribe((data: {}) => {
      this.training = data;

      console.log("===> data", data);

      //this.pageTitle = this.pageTitle;
  });
  }
}
