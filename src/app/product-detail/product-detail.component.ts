import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'
import {ProductsService}from './../core/services/products/products.service'
import{Product}from './../product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product= {}as Product; //se inicializa vacio de tipo producto

  constructor( private rouute:ActivatedRoute, private productsService:ProductsService ) {
  }

  ngOnInit(): void {
    this.rouute.params.subscribe((params:Params)=>{
      console.log(params);
      const id= params.id
      console.log(id);
      this.product=this.productsService.getProduct(id)!;//el "!" sirve para que no importa que sea nulo lo muestre
      console.log(this.product);
      
    });
  }

}
