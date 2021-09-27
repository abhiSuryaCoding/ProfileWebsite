import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import { ProjectComponent } from './MyComponents/project/project.component';
import { SkillsComponent } from './MyComponents/skills/skills.component';
import { TodoComponent } from './MyComponents/todo/todo.component';

const routes: Routes = [
  
  {path : 'Profile', component: SkillsComponent},
  {path : 'Album', component: TodoComponent},
  {path : 'Projects', component: ProjectComponent},
  { path: '**', component:  SkillsComponent} //default routing option
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(){}

    routing(): Routes {
      return routes;
    }
 }
