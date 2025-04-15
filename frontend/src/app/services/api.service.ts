import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL base definida no environment
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'listar');
  }
  
  // Adicione métodos para POST, PUT, DELETE se necessário.
}
