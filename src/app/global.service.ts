import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

Injectable()
export class GlobalServices { 
  formReset = new EventEmitter<any>();
  sendForm = new EventEmitter<any>();
  close2 = new Subject<any>();
}