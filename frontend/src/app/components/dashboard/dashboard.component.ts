import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TabsModule,
    TableModule,
    InputTextModule,
    InputGroupModule,
    ButtonModule,
    TooltipModule,
    CardModule,
    FormsModule,
    ConfirmPopupModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class DashboardComponent implements OnInit {
  dataRecords: any[] = [];
  filtroGlobal: string = '';
  selectedTab: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (data) => (this.dataRecords = data),
      error: (err) => console.error('Erro ao obter dados:', err),
    });
  }

  aplicarFiltro(): void {
    console.log('Filtro aplicado:', this.filtroGlobal);
  }

  exportarXLS(): void {
    console.log('Exportar XLS');
  }

  exportarPDF(): void {
    console.log('Exportar PDF');
  }
}
