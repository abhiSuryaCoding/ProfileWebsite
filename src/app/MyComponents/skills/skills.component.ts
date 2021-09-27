import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from '../../services/shared.service';
import { SubtitleComponent } from '../subtitle/subtitle.component';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService,private sub: SubtitleComponent) { 
    if(router.url=="/Profile")
    {
      console.log("Skill Componenet",router.url);
      shared.set(router.url);
    }
  }

  ngOnInit(): void {
  }

}
