import { Address } from "./address";

export class UserProfile {
    firstName: string;
    lastName: string;
    address: Address | undefined;
    phone: string;

    constructor( firstName: string,lastName: string,address: Address,phone: string){
        
        this.firstName = firstName;
        this.lastName = lastName; 
        this.phone = phone;

    }
}
