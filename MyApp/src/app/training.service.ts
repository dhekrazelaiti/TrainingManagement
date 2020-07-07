import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn :'root'
})

export class TainingService {
  private trainingUrl = 'api/training.json';

  constructor( private http: HttpClient) {}

 getTrainings(): Observable<ITraining[]> {

   return this.http.get<ITraining>(this.trainingUrl).pipe(
     tap(data => console.log('All: ' + JSON.stringify(data))),
     catchError(this.handleError)
   );

 }

 // tslint:disable-next-line:typedef
 private handleError(err: HttpErrorResponse){
   let errorMessage = '';
   if(err.error instanceof ErrorEvent){
     errorMessage = `An error occurred: ${err.error.message}`;
   }else{
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
   }
   console.error(errorMessage);
   return throwError(errorMessage);
 }
}
