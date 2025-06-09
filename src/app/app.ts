import { Component } from '@angular/core';
import { ProjectList } from './components/project-list/project-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectList],
  template: `<app-project-list></app-project-list>`,
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'freeworks-panel';
}
