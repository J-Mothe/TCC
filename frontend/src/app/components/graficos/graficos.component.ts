import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class GraficosComponent implements AfterViewInit {
  @ViewChild('pieChart') pieChart!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.chart = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],
        datasets: [
          {
            label: 'Dados Fictícios',
            data: [30, 25, 20, 25],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
            hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }
}
