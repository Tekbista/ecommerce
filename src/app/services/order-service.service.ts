import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  transactionId: string = '';

  constructor() { }

  setTransactionId(id: string){
    this.transactionId = id;
  }

  getTransactionId(){
    return this.transactionId;
  }
}
