import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GlobalServices } from '../global.service';

@Component({
  selector: 'app-filter2',
  templateUrl: './filter2.component.html',
  styleUrls: ['./filter2.component.css']
})
export class Filter2Component implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  
  private closeSub: Subscription;

  constructor(private globalService: GlobalServices) { 
    this.closeSub = this.globalService.formReset.subscribe(
      ()=>{this.signupForm.reset()}
    );

    this.closeSub = this.globalService.sendForm.subscribe(
      ()=>{
          console.log("subscribe form")
          alert("Form of filter2 has been sent");
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
