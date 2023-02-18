
import {State} from './state'

export class Address {
    addressId: number;
    address1: string;
    address2: string;
    city: string;
    state: State | undefined;
    zipCode: string;

    constructor(addressId: number, address1: string, address2: string, city: string, state: State, zipCode: string){
        this.addressId = addressId
        this.address1 = address1
        this.address2 = address2
        this.city = city
        this.state = state
        this.zipCode = zipCode
    }
}
