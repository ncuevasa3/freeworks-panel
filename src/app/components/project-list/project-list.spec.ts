import { Component, OnInit } from '@angular/core';
import { MockDataService, Project } from '../../services/mock-data.service';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss']
})
export class ProjectList implements OnInit {
  projects: Project[] = [];

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {
    this.projects = this.mockService.getProjects();
  }
}
