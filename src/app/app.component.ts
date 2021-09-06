import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { trigger , state , style, transition, animate, keyframes} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*animations: [
    trigger('list1', [
      //in is just dumy data 
      state('in', style({
        opacity: 1, //fully visiable
         transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity:0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void',[
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('list2', [
      //in is just dumy data 
      state('in', style({
        opacity: 1, //fully visiable
         transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)', 
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)', 
            opacity: 0.5,
            offset: .3
          }),
          style({
            transform: 'translateX(-20px)', 
            opacity: 1,
            offset: .8
          }),
          style({
            transform: 'translateX(0px)', 
            opacity: 1,
            offset: 1
          }),
        ]))
      ]),
      transition('* => void',[
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]*/
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
