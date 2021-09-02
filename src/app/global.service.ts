import { EventEmitter, Injectable } from "@angular/core";

Injectable()
export class GlobalServices { 
  formReset = new EventEmitter<any>();
  sendForm = new EventEmitter<any>();
}