import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from '../../services/shared.service';
import { SubtitleComponent } from '../subtitle/subtitle.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService,private sub: SubtitleComponent) { 
    if(router.url=="/Album")
    {
      console.log("todo/album Componenet",router.url);
      shared.set(router.url);
    }
  }

    ngOnInit():void
    {
      
    }

      showModal(event : any)
      {
          let modalImg = <HTMLImageElement>document.getElementById("img01");
          let target = event.target || event.srcElement || event.currentTarget;
          //let img = target.attributes.id;     
          let img=target.src;
          //console.log(document.getElementById(img)!.src);
          let modal = document.getElementById("myModal");
          
          modal!.style.display = "block";
          modalImg!.src = img;
  
          var span = <HTMLElement>document.getElementsByClassName("close")[0];
  
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() 
          { 
              modal!.style.display = "none";
          }
      
      }
    

        
}
