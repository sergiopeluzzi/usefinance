import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UseHeaderComponent } from "./header/header.component";
import { UseFooterComponent } from "./footer/footer.component";
import { UseMenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BillingCycleComponent } from "./billingCycle/billingCycle.component";

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
    BillingCycleComponent
  ],
  imports: [
    RouterModule.forRoot(
      useRoutes,
      { enableTracing: true } // <- Debug only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
