import { Component } from '@angular/core';
import { BillingCycleService } from '../billingCycle.service'
import { MessagesService } from "../../common/services/messages.service";

@Component({
  selector: 'bc-form',
  templateUrl: './bcForm.component.html'
})
export class BcFormComponent {

  constructor(
    private billingCycleService: BillingCycleService,
    private messages: MessagesService
  ) { }

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
    console.log(this.messages.addSuccess('Mensagem'))
  }
}