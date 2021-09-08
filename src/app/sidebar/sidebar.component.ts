import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalServices } from '../global.service';
import { trigger , state , style, transition, animate, keyframes} from '@angular/animations';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('list2', [
      //in is just dumy data 
      /******** First state ********/
      state('in', style({
        opacity: 1, //fully visiable
         transform: 'translateX(0)'
      })),
      /******** Second state ********/
      state('beforeVading',style({
        // opacity: 0, //fully visiable
        //: 'translateX(0)'
      })),
      /******* Transition to remove from DOM **********/
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
      /*
      transition('* => void',[
        animate(500, style({
          transform: 'translateX(100px)',
          opacity: 0
        })), 
      ]),*/
      /******* From any thing before vading ***********/
      transition('* => beforeVading',[
        animate(1000, keyframes([
          style({
            transform: 'translateX(0px)', 
            opacity: 1,
            /*offset: 1*/
          }),
          style({
            transform: 'translateX(-20px)', 
            opacity: 1,
            /*offset: .8*/
          }),
          style({
            transform: 'translateX(-50px)', 
            opacity: 0.5,
           /*offset: .3*/
          }),
          style({
            transform: 'translateX(-100px)', 
            opacity: 0,
            /*offset: 0*/
          }),          
        ]))
      ])
      /**** End of From any thing before vading ********/
    ]),
  ]
})
export class SidebarComponent implements OnInit {
  @Input() message: string='';
  @Output() close = new EventEmitter<void>();
  @Input() lang: string= "EN";
  name!: string;
  state : any;

  constructor(private globalServices: GlobalServices) {
    console.log("hello from ngIf")
    console.log("lang ="+this.lang)
   }

  
  ngOnInit(): void {
  }

  onClose(){
    this.state = 'beforeVading'
    this.close.emit(
    );
  }

  onClose2(){
    this.state = 'beforeVading'
  }

  ngOnDestroy(){
   // console.clear();

  }

  resetForm(){
  this.globalServices.formReset.emit();
  }

  sendForm(){
    console.log("send form")
    this.globalServices.sendForm.emit();
  }

  animatedStarted(event: any){
    console.log(event)
  }
  
  animatedEnded(event: any){
    console.log(event)
  }

}
