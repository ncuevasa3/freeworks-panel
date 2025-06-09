import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectList } from './components/project-list/project-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectList, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'freeworks-panel';
}
