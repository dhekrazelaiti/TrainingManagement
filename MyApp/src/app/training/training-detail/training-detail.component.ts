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
    let id :number = parseInt(this.route.snapshot.params['id']);
    this.trainingService.getTrainingById(id);

    console.log("===>this.training /03", this.training );
    this.pageTitle+= `: ${id}`;



  }

}
