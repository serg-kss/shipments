import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListInvoicesComponent } from './components/list-invoices/list-invoices.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { CreateProformaComponent } from './components/create-proforma/create-proforma.component';
import { ListProformasComponent } from './components/list-proformas/list-proformas.component';
import { ListShippersComponent } from './components/list-shippers/list-shippers.component';
import { CreateShipperComponent } from './components/create-shipper/create-shipper.component';
import { CreateConsigneeComponent } from './components/create-consignee/create-consignee.component';
import { ListConsigneeComponent } from './components/list-consignee/list-consignee.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { ManagerInfoComponent } from './components/manager-info/manager-info.component';
import { NavComponent } from './parts/nav/nav.component';
import { FooterComponent } from './parts/footer/footer.component';
import { StockComponent } from './components/stock/stock.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableHeadersComponent } from './parts/table-headers/table-headers.component';
import { ProductsService } from './services/products.service';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { CreateContractComponent } from './components/create-contract/create-contract.component';
import { ShipperService } from './services/shipper.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListInvoicesComponent,
    CreateInvoiceComponent,
    CreateProformaComponent,
    ListProformasComponent,
    ListShippersComponent,
    CreateShipperComponent,
    CreateConsigneeComponent,
    ListConsigneeComponent,
    CreateProductComponent,
    ListProductsComponent,
    AuthPageComponent,
    ManagerInfoComponent,
    NavComponent,
    FooterComponent,
    StockComponent,
    SidebarComponent,
    TableHeadersComponent,
    ProductInfoComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, ProductsService, ShipperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
