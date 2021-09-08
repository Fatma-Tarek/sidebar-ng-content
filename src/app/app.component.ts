import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GlobalServices } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  constructor(private globalService: GlobalServices){
    console.log("lang from parent = "+this.lang)
  }

  showEntryComponent(){
    console.log("show Entry Component1");
    console.log("flag1 before toggle=" + this.flag);
      if(this.flag !== true){
        console.log("flag1 =" + this.flag);
        this.flag= !this.flag
      }
  }
  
  onclose(){
    
    console.log("From onClose filter1 ")
    setTimeout(()=>{
      this.flag= !this.flag; 
    }, 1000)
    //this.closeSub.unsubscribe();
    /*setTimeout(()=>{
      this.closeSub.unsubscribe;
    }, 1000)*/
  }

  showEntryComponent2(){
      console.log("show Entry Component2");
      console.log("Flag2 before toggle = " +this.flag2)
      if(this.flag2 !== true){
        console.log("Flag2 = " +this.flag2)
        this.flag2 = !this.flag2
      }   
  }

  onclose2(){
    console.log("From onClose2 filter2 ")
    setTimeout(()=>{
      this.flag2= !this.flag2;
      console.log("inside setOutTime")
    }, 1000)
    /*console.log("before subscribe")
    this.closeSub.unsubscribe;
    console.log("after before subscribe")*/
    
  }
  
  ngOnDestroy(){
    
  }

  onSubmit(f: NgForm){
    this.defaultLanguage = f.value.secret;
    console.log(f.value.secret)  
  }
  
}
