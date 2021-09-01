import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'implement-content-projection';
  flag = false;
  flag2 = false;
  flagName = false;
  message = "unkown error"
  name!: string;
  constructor(){}
  showEntryComponent(){
    if(this.flag !== true){
      console.log("hello");
      this.flag= !this.flag
    }
  }
  onclose(name: string){
    this.flag= !this.flag;
    this.name = name;
    console.log(this.name)
  }

  showEntryComponent2(){
    if(this.flag2 !== true){
      console.log("hello2");
      this.flag2 = !this.flag2
    }
  }

  onclose2(name: string){
    this.flag2= !this.flag2;
    this.name = name;
    console.log(this.name)
  }
  

  
}
