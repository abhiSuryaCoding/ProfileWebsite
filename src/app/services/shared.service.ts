import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
 
export class SharedService {
  currentURL!: string;
  constructor() {
    
   }
   set(data:string)
   {
    console.log("Shared Service",data);
    this.currentURL=data;
    console.log("Shared Service after set",this.currentURL);
   }
   get()
   {
    console.log("Shared Service when get call",this.currentURL);
      return this.currentURL;
   }
   clear()
   {
    console.log("clear invoked"); 
    this.currentURL=" ";
   }
}
