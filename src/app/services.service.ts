import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map,retry, finalize } from 'rxjs/operators';
import { Produto } from './model/Produto';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  private header = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private retry_qty = 3;


  constructor(private http: HttpClient) { }
   
  getDataAgenda() {
    return this.http.get(`http://127.0.0.1:5000/showall`, { headers: this.header })
      .pipe(retry(this.retry_qty), catchError(this.handleError))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}

