import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  nombres=['jefer','sebastian','julian','nicolas'];

  addItem(){
    this.nombres.push('nuevo Nombre');
  }

  deleteItem(index: number){
    this.nombres.splice(index,1);
  }

}
