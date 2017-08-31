import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() credit: number
  @Input() debt: number
  @Input() total: number

  constructor(http: Http) { //Injetando a dependência do Http no constructor. Sempre que o component for carregado o Http será instanciado
    const url = 'http://localhost:3003/api/billingSummary'
    http.get(url) //Envia um GET para a url passada
      .map(res => res.json()) //recebe a resposta do get e passa em uma callback q mapeia pra json()
      .subscribe(({credit = 0, debt = 0}) => { //Operador destructoring | Pega o objeto da resposta, agora em JSON e desestrutura nas variáveis passadas
        this.credit = credit
        this.debt = debt
        this.total = credit - debt
      })
  }
}
