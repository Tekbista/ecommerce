import { AbstractControl } from "@angular/forms";

export function comparePassword(control: AbstractControl):{[Key: string]: boolean} | null{
    let cpass = control.value;
    let pass = control.parent?.get("password")?.value;

    if(cpass !== pass){
        return {
            'notmatch': true
        }
    }
    return null;
}