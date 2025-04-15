import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent {
  expanded: boolean = true;
  @Output() sidebarEvent = new EventEmitter<boolean>();

  menuItems = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Sobre', icon: 'pi pi-info-circle', routerLink: '/sobre' },
    { label: 'Dashboard', icon: 'pi pi-chart-line', routerLink: '/dashboard' },
    { label: 'Gráficos', icon: 'pi pi-info-circle', routerLink: '/graficos' },
  ];
}
