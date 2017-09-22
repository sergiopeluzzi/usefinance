import { Injectable } from '@angular/core';

@Injectable()
export class TabsService {
    constructor() { }

    show(owner, {
        tabList = false,
        tabCreate = false,
        tabUpdate = false,
        tabDelete = false
    }) {
        owner.tabList = tabList
        owner.tabCreate = tabCreate
        owner.tabUpdate = tabUpdate
        owner.tabDelete = tabDelete      
    }
    
  }
  
  