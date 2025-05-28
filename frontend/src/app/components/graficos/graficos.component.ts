import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SelectModule } from 'primeng/select';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Chart } from 'chart.js/auto';
import { ApiService } from '../../services/api.service';
import { ButtonModule } from 'primeng/button';

type Sentimento = 'positivo' | 'neutro' | 'negativo';

interface Tweet {
  tweetId: number;
  timestamp: string;
  content: string;
  likes: number;
  retweets: number;
  analytics: number;
  categoria:
    | 'educação'
    | 'infraestrutura'
    | 'policiamento'
    | 'saneamento'
    | 'saude'
    | 'transporte';
  sentimento: Sentimento;
}

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TabsModule,
    FormsModule,
    ConfirmPopupModule,
    SelectModule,
    ButtonModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class GraficosComponent implements OnInit, AfterViewInit {
  @ViewChild('pieChart') pieChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;

  pieChartInstance!: Chart;
  barChartInstance!: Chart;
  lineChartInstance!: Chart;

  data: Tweet[] = [];
  private viewReady = false;
  private readonly isBrowser: boolean;

  categorias = [
    { label: 'Educação', value: 'educação' },
    { label: 'Infraestrutura', value: 'infraestrutura' },
    { label: 'Policiamento', value: 'policiamento' },
    { label: 'Saneamento', value: 'saneamento' },
    { label: 'Saúde', value: 'saude' },
    { label: 'Transporte', value: 'transporte' },
  ];
  anosDisponiveis: { label: string; value: number }[] = [];

  categoriaSelecionada = 'educação';
  anoSelecionado = new Date().getFullYear();

  constructor(
    private apiService: ApiService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (tweets) => {
        this.data = tweets;
        if (this.viewReady && this.isBrowser) this.initGraficos();
      },
      error: (err) => console.error('Erro ao obter dados:', err),
    });
  }

  ngAfterViewInit(): void {
    this.viewReady = true;
    if (this.data.length && this.isBrowser) this.initGraficos();
  }

  private initGraficos(): void {
    const catCount: Record<string, number> = {};
    const anosSet = new Set<number>();

    this.data.forEach((t) => {
      catCount[t.categoria] = (catCount[t.categoria] || 0) + 1;
      anosSet.add(new Date(t.timestamp).getFullYear());
    });

    this.anosDisponiveis = Array.from(anosSet)
      .sort()
      .map((a) => ({ label: a.toString(), value: a }));

    this.gerarGraficoCategorias(catCount);
    this.atualizarGraficoSentimentosCategoria();
    this.atualizarGraficoMensalPorAno();
  }

  private gerarGraficoCategorias(cont: Record<string, number>): void {
    if (!this.isBrowser) return;
    const labels = Object.keys(cont);
    const valores = Object.values(cont);
    const cores = [
      '#3b82f6',
      '#10b981',
      '#fbbf24',
      '#f97316',
      '#ef4444',
      '#a855f7',
    ];

    if (this.pieChartInstance) this.pieChartInstance.destroy();
    this.pieChartInstance = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            data: valores,
            backgroundColor: cores.slice(0, valores.length),
            hoverBackgroundColor: cores.slice(0, valores.length),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
      },
    });
  }

  atualizarGraficoSentimentosCategoria(): void {
    if (!this.isBrowser) return;
    const tot: Record<Sentimento, number> = {
      positivo: 0,
      neutro: 0,
      negativo: 0,
    };
    this.data.forEach((t) => {
      if (t.categoria === this.categoriaSelecionada) tot[t.sentimento]++;
    });

    if (this.barChartInstance) this.barChartInstance.destroy();
    this.barChartInstance = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Positivo', 'Neutro', 'Negativo'],
        datasets: [
          {
            label: `Sentimentos – ${this.categoriaSelecionada}`,
            data: [tot.positivo, tot.neutro, tot.negativo],
            backgroundColor: ['#10b981', '#fbbf24', '#ef4444'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });
  }

  atualizarGraficoMensalPorAno(): void {
    if (!this.isBrowser) return;
    const mensais = new Array<number>(12).fill(0);
    this.data.forEach((t) => {
      const d = new Date(t.timestamp);
      if (d.getFullYear() === this.anoSelecionado) mensais[d.getMonth()]++;
    });

    if (this.lineChartInstance) this.lineChartInstance.destroy();
    this.lineChartInstance = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ],
        datasets: [
          {
            label: `Tweets por Mês (${this.anoSelecionado})`,
            data: mensais,
            fill: false,
            borderColor: '#3b82f6',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: true } },
      },
    });
  }
}
