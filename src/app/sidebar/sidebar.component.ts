import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalServices } from '../global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor(private globalServices: GlobalServices) {
    console.log("hello from ngIf")
    console.log("lang ="+this.lang)
    
   }

  @Input() message: string='';
  @Output() close = new EventEmitter<void>();
  @Input() lang: string;
  name!: string;
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
