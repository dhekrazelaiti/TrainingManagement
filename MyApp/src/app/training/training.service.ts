import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap , map , find, retry} from 'rxjs/operators';



import { ITraining } from '../training/training';


@Injectable({
  providedIn : 'root'
})

export class TrainingService {

  private trainingUrl = 'http://localhost:3000';
  training: ITraining;

  constructor( private http: HttpClient) {}

 getTrainings(): Observable<ITraining[]> {

   return this.http.get<ITraining[]>(this.trainingUrl + '/trainings')
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    //
    //  catchError(this.handleError)
   );

 }

getTrainingById(id): Observable<ITraining> {

  return this.http.get<ITraining>(this.trainingUrl  + '/trainings/' + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )

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
