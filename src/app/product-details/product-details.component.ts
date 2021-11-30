import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product,bestSeller } from 'src/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: product|bestSeller;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
