import { Component, OnInit } from '@angular/core';
import { ITraining } from './training';
import { TrainingService } from './training.service';

@Component({
  selector : 'app-trainings',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css'],
})

export class TrainingListComponent implements OnInit{

  pageTitle: string = 'Training List';
  errorMessage: string;

  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
     this._listFilter = value;
     this.filteredTrainings = this.listFilter ? this.performFilter(this.listFilter) : this.trainings;
  }

  filteredTrainings: ITraining[];
  trainings: ITraining[] = [];

  constructor( private trainingService: TrainingService) {
  // this.filteredTrainings = this.trainings;
  // this.listFilter = '';
}
onRatingClicked(message: string): void {
  this.pageTitle = 'Training List: ' + message;
}
  performFilter(filterBy: string): ITraining[] {

    filterBy = filterBy.toLocaleLowerCase();

    return this.trainings.filter((training: ITraining)  =>

    training.title.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }
  ngOnInit(): void {
    this.trainingService.getTrainings().subscribe({
      next: trainings => {
        this.trainings = trainings;
        this.filteredTrainings = this.trainings;
      },
      error: err => this.errorMessage = err
    });
    console.log('...Start Application!!!');
  }

}
