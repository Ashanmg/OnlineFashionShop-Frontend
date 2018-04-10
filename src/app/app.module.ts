import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CarouselModule, CollapseModule, ModalModule, BsDropdownModule, TypeaheadModule, TooltipModule, PopoverModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './online-shooping-components/common-component/login-component/login-component.component';
import { HomeComponent } from './online-shooping-components/home-component/home/home.component';
import { HeaderComponent } from './online-shooping-components/common-component/header-bar/header/header.component';

// Routing Module
import { AppRoutingModule } from './ng-modules/app-routing.module';
import { RegisterComponentComponent } from './online-shooping-components/common-component/register-component/register-component.component';
import { ProductComponent } from './online-shooping-components/product-component/product/product.component';
import { CategoryComponent } from './online-shooping-components/category-component/category/category.component';
import { FooterComponent } from './online-shooping-components/common-component/footer/footer.component';
import { CartComponent } from './online-shooping-components/cart-component/cart/cart.component';
import { BreadcrumbsComponent } from './online-shooping-components/common-component/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponentComponent,
    ProductComponent,
    CategoryComponent,
    FooterComponent,
    CartComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
