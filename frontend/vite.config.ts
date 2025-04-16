import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: [
      'primeng/card',
      'primeng/button',
      'primeng/tabview',
      'primeng/table',
      'primeng/inputtext',
      'primeng/inputgroup',
      'primeng/tooltip',
      '@angular/forms',
      '@angular/common/http',
      'primeng/scroller',
      'chart.js/auto'
    ]
  }
});
