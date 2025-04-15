import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraficosComponent } from './components/graficos/graficos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'graficos', component: GraficosComponent },
];
