import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { TasksComponent } from './+tasks';
import { SettingsComponent } from './+settings';

@Component({
  moduleId: module.id,
  selector: 'ng2-asana-app',
  templateUrl: 'ng2-asana.component.html',
  styleUrls: ['ng2-asana.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/settings', component: SettingsComponent},
  {path: '/tasks', component: TasksComponent}
])
export class Ng2AsanaAppComponent {
  title = 'Hello World!';
  constructor(private router: Router) {}
  
}
