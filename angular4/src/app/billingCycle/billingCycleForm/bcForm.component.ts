import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BillingCycleService } from '../billingCycle.service'
import { MessagesService } from "../../common/services/messages.service";
import { BillingCycle } from "../billingCycle.model"

@Component({
  selector: 'bc-form',
  templateUrl: './bcForm.component.html'
})
export class BcFormComponent {
  billingCycle: BillingCycle

  constructor(private billingCycleService: BillingCycleService, messages: MessagesService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {

  }

  create(form: any) {
    this.billingCycleService.postBillingCycles(form)
      .subscribe(form => { 
                    this.billingCycle = form
                  },
                    err => { 
                      //console.log(err)
                  }
                )
                  
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