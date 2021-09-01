import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
    console.log("hello from ngIf")
   }
  @Input() message: string='';
  @Output() close = new EventEmitter<string>();
  name!: string;
  ngOnInit(): void {
  }

  onClose(){
    this.close.emit(
      this.name = "Fatoma"
    );
  }

  ngOnDestroy(){
    console.clear();
  }

}
