import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployee(): Observable<Employee[]>{  //what type of data it will return
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee>{  //what type of data it will return
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee>{  //what type of data it will return
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`,employee);
  }

  public deleteEmployee(employeeId: number): Observable<void>{  //what type of data it will return
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
}
