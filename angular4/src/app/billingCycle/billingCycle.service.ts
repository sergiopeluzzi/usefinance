import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'


import { BillingCycle } from './billingCycle.model'

@Injectable()
export class BillingCycleService {
    url = "http://localhost:3003/api/billingCycles"

    //Injeção de dependencia do Http do angular
    constructor(private http: Http) {}

    //metodo que retorna um Observable do tipo array de BillingCycle
    getBillingCycles(): Observable<BillingCycle[]>  {
        return this.http.get(this.url) //envia um get pra URL passada
            .map(res => res.json()) //mapeia a reposta pra JSON
    }

    postBillingCycles() {
        console.log('POST')
    }

}