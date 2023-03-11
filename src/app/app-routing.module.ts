import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListInvoicesComponent } from './components/list-invoices/list-invoices.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { CreateProformaComponent } from './components/create-proforma/create-proforma.component';
import { ListProformasComponent } from './components/list-proformas/list-proformas.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'create-invoices', component: CreateInvoiceComponent},
  {path: 'invoices', component: ListInvoicesComponent},
  {path: 'create-pi', component: CreateProformaComponent},
  {path: 'pi', component: ListProformasComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'products', component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
