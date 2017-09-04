import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { UseHeaderComponent } from "./header/header.component";
import { UseFooterComponent } from "./footer/footer.component";
import { UseMenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BillingCycleComponent } from "./billingCycle/billingCycle.component";
import { ContentHeaderComponent } from "./common/components/contentHeader/contentHeader.component";
import { GridSystemService } from "./common/services/gridSystem.service";
import { ValueBoxComponent } from "./common/components/valueBox/valueBox.component";
import { BcFormComponent } from "./billingCycle/billingCycleForm/bcForm.component";
import { FieldComponent } from "./common/components/field/field.component";
import { BillingCycleService } from "./billingCycle/billingCycle.service";



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
    BrowserModule
  ],
  providers: [
    GridSystemService,
    BillingCycleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
