import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BillingCycleService } from '../billingCycle.service';
import { MessagesService } from "../../common/services/messages.service";
import { TabsService } from "../../common/services/tabs.service";
import { BillingCycle } from "../billingCycle.model";

@Component({
  selector: 'bc-form',
  templateUrl: './bcForm.component.html'
})
export class BcFormComponent {
  billingCycle: BillingCycle
  errorMessage: string

  constructor(private billingCycleService: BillingCycleService, messages: MessagesService, public toastr: ToastsManager, vcr: ViewContainerRef, public tabs: TabsService) { 
    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {
    this.tabs.show(this, { tabCreate: true, tabList: true })
  }

  create(form: any) {
    this.billingCycleService.postBillingCycles(form)
      .subscribe(form => { 
                    this.billingCycle = form
                  },
                    err => { 
                      this.errorMessage = <any>err.errors
                      console.log(this.errorMessage)
                  }
                )
                  
  }

  update(billingCycle) {
    
  }

  delete(billingCycle) {
    
  }

  toast() {
    this.toastr.success('mensagem', 'Titulo', { enableHtml: false });
  }
}