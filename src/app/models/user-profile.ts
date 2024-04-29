import { Address } from "./address";

export class UserProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: Address | undefined;
    phone: string;

    constructor(id: number, firstName: string,lastName: string, email: string,address: Address,phone: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName; 
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
