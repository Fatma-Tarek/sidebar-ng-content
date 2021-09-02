import { Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GlobalServices } from '../global.service';

@Component({
  selector: 'app-filter1',
  templateUrl: './filter1.component.html',
  styleUrls: ['./filter1.component.css']
})
export class Filter1Component implements OnInit, OnDestroy {
  @ViewChild('f') signupForm: NgForm;
  
  private closeSub: Subscription;

  constructor(private globalService: GlobalServices) { 
    this.closeSub = this.globalService.formReset.subscribe(
      ()=>{this.signupForm.reset()}
    );

    this.closeSub = this.globalService.sendForm.subscribe(
      ()=>{
          console.log("subscribe form")
          alert("Form has been sent");
          console.log(this.signupForm);
          this.signupForm.reset();
        }
      )
  }

  ngOnInit(): void { }


  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset();
  }

  ngOnDestroy(){
    this.closeSub.unsubscribe();
  }
}
