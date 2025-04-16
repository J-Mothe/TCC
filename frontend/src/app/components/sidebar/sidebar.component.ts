import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MenuModule],
})
export class SidebarComponent {
  @Output() sidebarEvent = new EventEmitter<boolean>();

  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/'] },
    { label: 'Sobre', icon: 'pi pi-info-circle', routerLink: ['/sobre'] },
    {
      label: 'Dashboard',
      icon: 'pi pi-chart-line',
      routerLink: ['/dashboard'],
    },
    { label: 'Gráficos', icon: 'pi pi-chart-bar', routerLink: ['/graficos'] },
  ];
}
