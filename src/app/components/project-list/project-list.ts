import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../project-card/project-card';
import { MockDataService, Project } from '../../services/mock-data.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss']
})
export class ProjectList implements OnInit {
  projects: Project[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.projects = this.mockDataService.getProjects();
  }
}
