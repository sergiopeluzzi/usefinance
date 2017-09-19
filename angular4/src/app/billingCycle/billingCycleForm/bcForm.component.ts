import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BillingCycleService } from '../billingCycle.service'
import { MessagesService } from "../../common/services/messages.service";


@Component({
  selector: 'bc-form',
  templateUrl: './bcForm.component.html'
})
export class BcFormComponent {
  constructor(private billingCycleService: BillingCycleService, messages: MessagesService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr)
  }

  create(form: any) {
    //this.billingCycleService.postBillingCycles()
    console.log(form)
  }

  update() {
    console.log('updating')
  }

  delete() {
    console.log('deleting')
  }

  onSubmit(form: any): void {
    console.log('you submited value:', form)
  }

  toast() {
    this.toastr.success('mensagem', 'Titulo', { enableHtml: false });
  }
}