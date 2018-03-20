import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule, BsDropdownModule, TypeaheadModule, TooltipModule, PopoverModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './online-shooping-components/common-component/login-component/login-component.component';
import { HomeComponent } from './online-shooping-components/home-component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
