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
    {title:'Binge Suggestions',details:'It is an Angular based project with firebase database on bakend. It uses IMDB API to list movies according to user suggestions. It is basically crowd sourced movie collection for others to watch!  ',img:'https://i.ibb.co/MgsytTG/bingeS.png',link:'https://bingesuggestions.ml'},
    {title:'Profile Website',details:'This profile web site itself is part of my Projects! Feel free to explore!',img:"https://i.ibb.co/Tv5WBV1/pro.png" ,link:'https://abhisuryacoding.github.io/ProfileWebsite/'},
  {title:'Yoga App',details:'This is details section for the project',img:'assets/album/1.jpg',link:''},
  {title:'Yoga App',details:'This is details section for the project',img:'assets/album/1.jpg',link:''}];

  ngOnInit(): void {
  }
 
}

class Project{
  title!: string;
  details!: string;
  img!:string;
  link!: string;
}
