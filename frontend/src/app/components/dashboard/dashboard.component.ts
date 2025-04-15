import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  dataRecords: any[] = [
    {
      tweet_id: 1909953257071325398,
      timestamp: new Date('2025-04-09T12:55:16Z'),
      content:
        'Povos indígenas reunidos em Brasília reclamam de falta de educação pública.',
      likes: 0,
      retweets: 0,
      analytics: 24,
    },
    {
      tweet_id: 1909721455396634718,
      timestamp: new Date('2025-04-08T21:34:10Z'),
      content:
        'O foco do governo neste semestre é isenção do Imposto de Renda e avanço na PEC da Segurança Pública.',
      likes: 208,
      retweets: 61,
      analytics: 1500,
    },
    {
      tweet_id: 1909266128976609299,
      timestamp: new Date('2025-04-07T15:24:52Z'),
      content:
        'Hoje participei de reunião com o Ministro da Educação para discutir a qualidade do ensino.',
      likes: 9,
      retweets: 0,
      analytics: 275,
    },
    {
      tweet_id: 1908920287480930461,
      timestamp: new Date('2025-04-06T16:30:37Z'),
      content:
        'Qual a pauta importante para o país em Brasília? Recursos para saúde, educação, segurança?',
      likes: 1,
      retweets: 0,
      analytics: 22,
    },
  ];

  constructor(private router: Router) {}
}
