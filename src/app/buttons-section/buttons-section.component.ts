import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  button_1(){
    console.log("fatma tarek omran")
  }

}
