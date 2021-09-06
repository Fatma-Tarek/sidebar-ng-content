import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalServices } from '../global.service';
import { trigger , state , style, transition, animate, keyframes} from '@angular/animations'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
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
  ]
})
export class SidebarComponent implements OnInit {
  @Input() message: string='';
  @Output() close = new EventEmitter<void>();
  @Input() lang: string= "EN";
  name!: string;

  constructor(private globalServices: GlobalServices) {
    console.log("hello from ngIf")
    console.log("lang ="+this.lang)
   }

  
  ngOnInit(): void {
  }

  onClose(){
    this.close.emit(
    );
  }

  ngOnDestroy(){
    console.clear();

  }

  resetForm(){
  this.globalServices.formReset.emit();
  }

  sendForm(){
    console.log("send form")
    this.globalServices.sendForm.emit();
  }

  

}
