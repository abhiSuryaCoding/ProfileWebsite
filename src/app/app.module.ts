import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import { SkillsComponent } from './MyComponents/skills/skills.component';
import { ProjectComponent } from './MyComponents/project/project.component';
import { SubtitleComponent } from './MyComponents/subtitle/subtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    ProfileComponent,
    SkillsComponent,
    ProjectComponent,
    SubtitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
