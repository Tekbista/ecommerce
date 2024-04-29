
import {State} from './state'

export class Address {
    addressId: number;
    street: string;
    address2: string;
    city: string;
    state: State | undefined;
    zipCode: string;

    constructor(addressId: number, street: string, address2: string, city: string, state: State, zipCode: string){
        this.addressId = addressId
        this.street = street
        this.address2 = address2
        this.city = city
        this.state = state
        this.zipCode = zipCode
    }
}
