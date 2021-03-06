import { NgModule, Component } from '@angular/core';
import { RouterLinkActive, Routes, RouterModule } from '@angular/router';

import { AuthenticateGuard } from './../guards/authenticate.guard';

/* Components */
import { LoginComponentComponent } from '../online-shooping-components/common-component/login-component/login-component.component';
import { HomeComponent } from '../online-shooping-components/home-component/home/home.component';
import { MaintenanceComponent } from './../online-shooping-components/common-component/maintenance/maintenance.component';

// tslint:disable-next-line:max-line-length
import { RegisterComponentComponent } from './../online-shooping-components/common-component/register-component/register-component.component';
import { ProductComponent } from './../online-shooping-components/product-component/product/product.component';
import { CategoryComponent } from './../online-shooping-components/category-component/category/category.component';
import { CartComponent } from './../online-shooping-components/cart-component/cart/cart.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponentComponent},
    { path: 'product', component: ProductComponent},
    { path: 'categories', component: CategoryComponent},
    { path: 'cart', component: CartComponent, canActivate : [AuthenticateGuard]},
    { path: 'myaccount', component: MaintenanceComponent, canActivate : [AuthenticateGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
