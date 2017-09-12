import { Injectable } from '@angular/core';


@Injectable()
export class MessagesService {
  constructor() {}
  
  addMsg(msgs, title, method) {
    if (msgs instanceof Array) {
      //msgs.forEach(msg => this.toastr[method](msgs, title))
    } else {
      //return this.toastr[method](msgs, title)
    }
  }

  addSuccess(msgs) {
    return this.addMsg(msgs, 'Sucesso', 'success')
  }

  addError(msgs) {
    return this.addMsg(msgs, 'Erro', 'error')
  }
}
