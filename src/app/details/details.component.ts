import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { bestSeller, bestSellers, product, products } from 'src/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: product | undefined;
  bestSeller: bestSeller | undefined;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idProductFromRoute = Number(routeParams.get("idProduct"));
    if(this.router.url==`/bestSeller/${idProductFromRoute}`){
      this.bestSeller = bestSellers.find(product => product.id === idProductFromRoute);
    }
    else{
      this.product = products.find(product => product.id === idProductFromRoute);
    }
  }

}
