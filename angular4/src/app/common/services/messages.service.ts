import { Injectable } from '@angular/core';
import { ToastsManager } from "ng2-toastr/src/toast-manager";


@Injectable()
export class MessagesService {
  constructor(private toastr: ToastsManager) {}
  
  addMsg(msgs, title, method) {
    if (msgs instanceof Array) {
      msgs.forEach(msg => this.toastr[method](msgs, title))
    } else {
      return this.toastr[method](msgs, title)
    }
  }

  addSuccess(msgs) {
    return this.addMsg(msgs, 'Sucesso', 'success')
  }

  addError(msgs) {
    return this.addMsg(msgs, 'Erro', 'error')
  }
}
