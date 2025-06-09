import { Component, OnInit } from '@angular/core';
import { MockDataService, Project } from '../../services/mock-data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private mockData: MockDataService) { }

  ngOnInit(): void {
    this.projects = this.mockData.getProjects();
  }

}
