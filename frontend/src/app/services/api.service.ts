import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL do endpoint do back-end (Spring Boot)
  private apiUrl = 'http://localhost:8080/api/data';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  // Adicione métodos para POST, PUT, DELETE se necessário.
}
