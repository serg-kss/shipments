import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  tyre_id: string
  brand: string
  size: string
  model: string
  sl: string
  index_speed: string
  index_load: string
  type: string
  sezon: string
  comment: string

  constructor(public product: ProductsService, private router: Router) { }

  createProduct(form: NgForm) {
    if (form.valid) {
      this.product.createNewProduct(
        this.tyre_id,
        this.brand,
        this.size,
        this.model,
        this.sl,
        this.index_speed,
        this.index_load,
        this.type,
        this.sezon,
        this.comment
        ).subscribe(() => {
          this.router.navigate(['products'])
      });
    }
  }

  back(){
    this.router.navigate(['products'])
  }

}
