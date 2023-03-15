import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {

  data: any;
  corrections: boolean = false;

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
  id: string
  
  constructor(private router: Router, public product: ProductsService,) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    this.tyre_id = this.data.tyre_id;
    this.brand = this.data.brand;
    this.size = this.data.size;
    this.model = this.data.model;
    this.sl = this.data.sl;
    this.index_speed = this.data.index_speed;
    this.index_load = this.data.index_load;
    this.type = this.data.type;
    this.sezon = this.data.sezon;
    this.comment = this.data.comment;
    this.id = this.data.tyre_id;
  }

  changeProduct(form: NgForm) {
    if (form.valid) {
      this.product.changeProduct(
        this.id,
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

  correction_btn(){
    this.corrections = true;
  }

  back(){
    this.router.navigate(['products'])
  }

  backForm(){
    this.corrections = false;
  }
}
