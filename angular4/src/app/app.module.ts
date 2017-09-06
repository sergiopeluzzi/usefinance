import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'ng2-toastr/src/toast.module';

import { AppComponent } from './app.component';
import { UseHeaderComponent } from "./header/header.component";
import { UseFooterComponent } from "./footer/footer.component";
import { UseMenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BillingCycleComponent } from "./billingCycle/billingCycle.component";
import { ContentHeaderComponent } from "./common/components/contentHeader/contentHeader.component";
import { ValueBoxComponent } from "./common/components/valueBox/valueBox.component";
import { BcFormComponent } from "./billingCycle/billingCycleForm/bcForm.component";
import { FieldComponent } from "./common/components/field/field.component";

import { GridSystemService } from "./common/services/gridSystem.service";
import { BillingCycleService } from "./billingCycle/billingCycle.service";
import { MessagesService } from "./common/services/messages.service";
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { ToastOptions } from "ng2-toastr/src/toast-options";




const useRoutes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'billingCycle',
    component: BillingCycleComponent
  },
  {
    path: '**',
    component : DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UseHeaderComponent,
    UseFooterComponent,
    UseMenuComponent,
    DashboardComponent,
    BillingCycleComponent,
    ContentHeaderComponent,
    ValueBoxComponent,
    BcFormComponent,
    FieldComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(
      useRoutes,
      { enableTracing: false } // <- Debug only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastModule
  ],
  providers: [
    GridSystemService,
    BillingCycleService,
    MessagesService, ToastsManager, ToastOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
