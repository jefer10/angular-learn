import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../product.model'

@Component({
    selector:'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent{
    @Input() product:Product|any;

    @Output() productClicked:EventEmitter<any>=new EventEmitter();

    addCarrito(){
        console.log("se agrego al carrito");
        this.productClicked.emit(this.product.id);
    }
}