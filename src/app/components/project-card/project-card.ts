import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // IMPORTAR CommonModule
import { Project } from '../../services/mock-data.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],  // AGREGAR CommonModule aquí
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss']
})
export class ProjectCard {
  @Input() project!: Project;
}
