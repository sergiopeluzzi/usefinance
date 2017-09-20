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

    postBillingCycles(form: BillingCycle): Observable<BillingCycle> {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })
        
        console.log(form)

        return this.http.post(this.url, form, options)
                .map(res => res.json())
                .catch(this.handleError)
                
        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

}