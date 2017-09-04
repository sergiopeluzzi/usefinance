import { Component } from '@angular/core';
import { BillingCycleService } from '../billingCycle.service'

@Component({
  selector: 'bc-form',
  templateUrl: './bcForm.component.html'
})
export class BcFormComponent {

  constructor(private billingCycleService: BillingCycleService) { }

  create() {
    this.billingCycleService.postBillingCycles()
  }

  update() {
    console.log('updating')
  }

  delete() {
    console.log('deleting')
  }

  toast() {

  }
}