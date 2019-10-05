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
   
 

  pesquisaCliente(codcli){
    return this.http.get(`http://tnt1.herokuapp.com/busca/${codcli}`, {headers: this.header})
    .pipe(retry(this.retry_qty), catchError(this.handleError))
  }

  criaCliente(nome ,telretorno ,tel ,cpfcpnj ,endereco ,email){
    return this.http.post(`http://tnt1.herokuapp.com/criacli/${nome}/${telretorno}/${tel}/${cpfcpnj}/${endereco}/${email}`,{headers: this.header})
    .pipe(retry(this.retry_qty), catchError(this.handleError))
  }

  deletaCliente(idcliente){
    return this.http.delete(`http://127.0.0.1:5000/delete/${idcliente}`,{headers: this.header})
    .pipe(retry(this.retry_qty), catchError(this.handleError))
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}

