import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListInvoicesComponent } from './components/list-invoices/list-invoices.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { CreateProformaComponent } from './components/create-proforma/create-proforma.component';
import { ListProformasComponent } from './components/list-proformas/list-proformas.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { CreateShipperComponent } from './components/create-shipper/create-shipper.component';
import { ListShippersComponent } from './components/list-shippers/list-shippers.component';
import { CreateContractComponent } from './components/create-contract/create-contract.component';
import { ShipperInfoComponent } from './components/shipper-info/shipper-info.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'create-invoices', component: CreateInvoiceComponent},
  {path: 'invoices', component: ListInvoicesComponent},
  {path: 'create-pi', component: CreateProformaComponent},
  {path: 'pi', component: ListProformasComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'products/info', component: ProductInfoComponent},
  {path: 'products', component: ListProductsComponent},
  {path: 'contracts', component: ListShippersComponent},
  {path: 'create-shipper', component: CreateShipperComponent},
  {path: 'create-contract', component: CreateContractComponent},
  {path: 'shippers/info', component: ShipperInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
