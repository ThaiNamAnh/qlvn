import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from './models/Employee';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private REST_API_SERVER_EMPLOYEES = "http://localhost:3000/employees";
  constructor(private httpClient: HttpClient) { }
  public getEmployees(): Observable<any> {
    const url = this.REST_API_SERVER_EMPLOYEES;
    return this.httpClient.get<any>(url, httpOptions)
    .pipe(catchError(this.handleError));
  }
  public addEmployee(data: Employee): Observable<any> {
    const url = this.REST_API_SERVER_EMPLOYEES;
    return this.httpClient.post<any>(url, data, httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, `+ `body was: ${error.error}`
      );
    }
    return throwError('St bad happend; plz try again later.');
  }
}
