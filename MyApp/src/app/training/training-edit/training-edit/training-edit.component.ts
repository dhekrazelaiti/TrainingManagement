import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from '../../training.service';

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrls: ['./training-edit.component.css']
})
export class TrainingEditComponent implements OnInit {


  constructor(
    public trainingService: TrainingService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  trainingData: any = {};
 id = this.route.snapshot.params['id'];

  ngOnInit(): void {

    this.trainingService.getTrainingById(this.id).subscribe((data: {}) => {
      this.trainingData = data;
    })
  }

  // Update training data
  updateTraining() {
    if ( window.confirm('Are you sure, you want to update?')){
      this.trainingService.updateTraining(this.id, this.trainingData).subscribe(data => {
        this.router.navigate(['/trainings']);
      });
    }
  }

}
