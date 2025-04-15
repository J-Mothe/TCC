import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, TableModule],
})
export class DashboardComponent implements OnInit {
  dataRecords: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (data) => {
        this.dataRecords = data;
      },
      error: (err) => {
        console.error('Erro ao obter dados:', err);
      },
    });
  }
}
