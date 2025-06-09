import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importar CommonModule

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ Asegúrate de que sea standalone
  imports: [CommonModule], // ✅ Importar CommonModule aquí
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  proyectos = [
    {
      nombre: 'Landing Page App',
      cliente: 'Cliente A',
      estado: 'En progreso',
      progreso: 60,
      prioridad: 'Alta',
      fechaLimite: 'Jun 10, 2025',
      comentarios: 'Falta agregar SEO'
    },
    {
      nombre: 'App Móvil Delivery',
      cliente: 'Cliente B',
      estado: 'Finalizado',
      progreso: 100,
      prioridad: 'Media',
      fechaLimite: 'May 30, 2025',
      comentarios: 'Excelente trabajo'
    },
    {
      nombre: 'Sistema Inventarios',
      cliente: 'Cliente C',
      estado: 'Atrasado',
      progreso: 40,
      prioridad: 'Alta',
      fechaLimite: 'Jun 1, 2025',
      comentarios: 'Requiere revisión urgente'
    }
  ];
}
