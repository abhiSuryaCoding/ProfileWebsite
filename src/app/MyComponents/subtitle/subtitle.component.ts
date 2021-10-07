import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent implements OnInit {

  
  title="temp";
  localShared!: SharedService;
  constructor(private shared:SharedService) 
  {
    this.localShared=shared;
  }
  
  ngOnInit(): void {
    
    
  }
  getTitle() : string
  {
    this.title=this.localShared.get();
    console.log("This is ",this.title);
    //this.localShared.clear(); //clearing the last value is important for default option to work
    switch(this.title)
    {
      case "/Profile":
        return "<These are my Skills>"; break;
        case "/Album":
        return "This is my album";break;
        case "/Projects":
        return "These are my projects";break;
        default:
        return "<These are my Skills>";
    }
  }

}
