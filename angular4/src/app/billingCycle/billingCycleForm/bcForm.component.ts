import { Component, ViewContainerRef } from '@angular/core';
import { BillingCycleService } from '../billingCycle.service'
import { MessagesService } from "../../common/services/messages.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'bc-form',
  templateUrl: './bcForm.component.html'
})
export class BcFormComponent {

  constructor(private billingCycleService: BillingCycleService, private messages: MessagesService,
               public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr)
  }

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
    this.toastr.success('mensagem', 'Titulo', { enableHtml: false });
  }
}