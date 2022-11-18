import { zip } from "rxjs";

export class UserProfile {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;

    constructor(firstName: string,lastName: string,address1: string,address2: string,city: string,state: string,zipCode: string,phone: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state =state;
        this.zipCode = zipCode;
        this.phone = phone;

    }
}
