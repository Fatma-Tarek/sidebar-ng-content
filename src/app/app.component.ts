import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  @ViewChild('f') signupForm: NgForm;
  private closeSub: Subscription;
  title = 'implement-content-projection';
  flag = false;
  flag2 = false;
  flagName = false;
  message = "unkown error"
  name!: string;
  lang!: string;
  defaultLanguage: string = "EN";

  constructor(){
    console.log("lang from parent = "+this.lang)
  }

  showEntryComponent(){
    if(this.flag !== true){
      console.log("hello");
      this.flag= !this.flag
    }
  }
  
  onclose(){
    this.flag= !this.flag;
    console.log(this.name)
    this.closeSub.unsubscribe;
  }

  showEntryComponent2(){
    if(this.flag2 !== true){
      console.log("hello2");
      this.flag2 = !this.flag2
    }
  }

  onclose2(){
    this.flag2= !this.flag2;
    console.log(this.name)
    this.closeSub.unsubscribe;
  }
  
  ngOnDestroy(){
    
  }

  onSubmit(f: NgForm){
    this.defaultLanguage = f.value.secret;
    console.log(f.value.secret)  
  }
  
}
