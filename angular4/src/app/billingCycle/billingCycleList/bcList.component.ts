import { Component, Input } from '@angular/core';
import { BillingCycleService } from '../billingCycle.service'
import { TabsService } from "../../common/services/tabs.service"
import { BillingCycle } from '../billingCycle.model'


@Component({
  selector: 'bc-list',
  templateUrl: './bcList.component.html',
  styleUrls: ['./bcList.component.css']
})
export class BcListComponent {
  @Input() billingCycles: BillingCycle[]
  billingCycle: BillingCycle

  constructor(private billingCycleService: BillingCycleService, public tabs: TabsService) { }

  ngOnInit() {
    this.billingCycleService.getBillingCycles()
      .subscribe( res => this.billingCycles = res )
  }

  showTabUpdate(billingCycle) {
    this.billingCycle = billingCycle
    this.tabs.show(this, { tabUpdate: true })
  }

  showTabDelete(billingCycle) {
    this.billingCycle = billingCycle
    this.tabs.show(this, { tabDelete: true })
  }
}
