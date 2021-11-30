import { Component, OnInit } from '@angular/core';
import { products } from 'src/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }
  share(name:string){
    window.alert(`${name} Added to cart!`);
  }
  onNotify(name:string){
    window.alert("Roger that! " + "Product: " + name);
  }

}
