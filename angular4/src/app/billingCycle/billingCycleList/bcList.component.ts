import { Component, Input } from '@angular/core';
import { BillingCycleService } from '../billingCycle.service'
import { BillingCycle } from '../billingCycle.model'

@Component({
  selector: 'bc-list',
  templateUrl: './bcList.component.html',
  styleUrls: ['./bcList.component.css']
})
export class BcListComponent {
  @Input() billingCycles: BillingCycle[]

  constructor(private billingCycleService: BillingCycleService) { }

  ngOnInit() {
    this.billingCycleService.getBillingCycles()
      .subscribe( res => this.billingCycles = res )
  }
}
