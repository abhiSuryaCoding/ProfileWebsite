import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from '../../services/shared.service';
import { SubtitleComponent } from '../subtitle/subtitle.component';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService,private sub: SubtitleComponent) { 
    if(router.url=="/Projects")
    {
      console.log("todo/album Componenet",router.url);
      shared.set(router.url);
    }
  }
  
  projects:Project[]=[
    {title:'Profile Website',details:'This is details section for the project',img:'assets/album/2.jpg'},
  {title:'Heros App',details:'This is details section for the project',img:'assets/album/1.jpg'},
  {title:'Yoga App',details:'This is details section for the project',img:'assets/album/1.jpg'},
  {title:'Yoga App',details:'This is details section for the project',img:'assets/album/1.jpg'}];

  ngOnInit(): void {
  }
 
}

class Project{
  title!: string;
  details!: string;
  img!:string;
}
