export class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private confirmPassword: string;

    constructor(firstName: string, lastName: string, email:string, password:string, confirmPassword:string){
       
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}
