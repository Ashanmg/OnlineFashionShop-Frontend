import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { LoginComponentComponent } from '../online-shooping-components/common-component/login-component/login-component.component';
import { HomeComponent } from '../online-shooping-components/home-component/home/home.component';
import { RegisterComponentComponent } from './../online-shooping-components/common-component/register-component/register-component.component';
import { ProductComponent } from './../online-shooping-components/product-component/product/product.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponentComponent},
    { path: 'product', component: ProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }