import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CarouselModule, CollapseModule, ModalModule, BsDropdownModule, TypeaheadModule, TooltipModule, PopoverModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './online-shooping-components/common-component/login-component/login-component.component';
import { HomeComponent } from './online-shooping-components/home-component/home/home.component';
import { HeaderComponent } from './online-shooping-components/common-component/header-bar/header/header.component';

// Routing Module
import { AppRoutingModule } from './ng-modules/app-routing.module';
import { RegisterComponentComponent } from './online-shooping-components/common-component/register-component/register-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponentComponent
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
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
