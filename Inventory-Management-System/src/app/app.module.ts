import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl, FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InventoryDetailsComponent,
    CreateInventoryComponent,
    PurchaseComponent,
    UsersComponent,
    SalesComponent,
    CustomerComponent,
    ProductsComponent,
    BillingComponent,
    AuthComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
