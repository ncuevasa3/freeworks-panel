import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'freeworks-panel';
}
