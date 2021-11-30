import { Component, OnInit } from '@angular/core';
import { bestSellers } from 'src/product';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
  bestSellers = bestSellers;
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
