import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { ITraining } from '../training/training';


@Injectable({
  providedIn : 'root'
})

export class TrainingService {

  private trainingUrl = 'api/trainings/training.json';
  training: ITraining;

  constructor( private http: HttpClient) {}

 getTrainings(): Observable<ITraining[]> {

   return this.http.get<ITraining[]>(this.trainingUrl)
   .pipe(
     tap(data => console.log('All: ' + JSON.stringify(data))),
     catchError(this.handleError)
   );

 }

getTrainingById(id: number): Observable<ITraining[]> {

  return this.training.find(training => training.id == id);
}


 // tslint:disable-next-line:typedef
 private handleError(err: HttpErrorResponse){
   let errorMessage = '';
   if (err.error instanceof ErrorEvent){
     errorMessage = `An error occurred: ${err.error.message}`;
   }else{
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
   }
   console.error(errorMessage);
   return throwError(errorMessage);
 }
}
