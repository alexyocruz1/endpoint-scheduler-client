import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitEndpoint(data: { endpoint: string; frequency: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/submit`, data);
  }
}