import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  // _rol: string | null = '';

  // ngOnInit() {
  //   this._rol = localStorage.getItem('rol');
  //   console.log(this._rol);
  //   if (this._rol !== null) {
  //     this.addNewItem(this._rol);
  //   }
  // }

  // @Output() newItemEvent = new EventEmitter<string>();

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
}
