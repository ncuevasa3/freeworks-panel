import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  client: string;
  status: 'En progreso' | 'Finalizado' | 'Atrasado';
  progress: number; // porcentaje 0-100
  priority: 'Alta' | 'Media' | 'Baja';
  comments: string[];
  dueDate: string; // fecha en formato ISO
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private projects: Project[] = [
    {
      id: 1,
      name: 'Landing Page App',
      client: 'Cliente A',
      status: 'En progreso',
      progress: 60,
      priority: 'Alta',
      comments: ['Falta agregar SEO'],
      dueDate: '2025-06-10'
    },
    {
      id: 2,
      name: 'App Móvil Delivery',
      client: 'Cliente B',
      status: 'Finalizado',
      progress: 100,
      priority: 'Media',
      comments: ['Excelente trabajo'],
      dueDate: '2025-05-30'
    },
    {
      id: 3,
      name: 'Sistema Inventarios',
      client: 'Cliente C',
      status: 'Atrasado',
      progress: 40,
      priority: 'Alta',
      comments: ['Requiere revisión urgente'],
      dueDate: '2025-06-01'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
