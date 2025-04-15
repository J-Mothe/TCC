import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SobreComponent {}
