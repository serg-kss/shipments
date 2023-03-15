import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Tyre } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  create_product: string = 'create-product'
  products: Tyre[] = []

  constructor(public productService: ProductsService, private router: Router) { 

    this.productService.getAll().subscribe((data)=>{
      this.products = data
    })

  }

  navigateWithState(i:number): void {
    this.router.navigateByUrl('products/info', {state: this.products[i]});
  }





}
