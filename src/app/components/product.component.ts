import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../product.model'

@Component({
    selector:'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent{
    @Input() product1: Product;

    @Output() productClicked:EventEmitter<any>=new EventEmitter();

    constructor() { 
        this.product1={ 
            id: '0',
            image: '',
            title: '',
            price: 0,
            description: ''}
    }

    addCarrito(){
        console.log("se agrego al carrito");
        this.productClicked.emit(this.product1.id);
    }
}