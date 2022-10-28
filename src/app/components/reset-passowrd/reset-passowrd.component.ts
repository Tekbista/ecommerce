import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { comparePassword } from '../registration-component/compare-password-validators';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.css']
})
export class ResetPassowrdComponent implements OnInit {

  constructor(private _userService: UserService) { }
  message: string = '';
  forgetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16), comparePassword])
  })
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.forgetPasswordForm.valid){
      let email = this.forgetPasswordForm.value.email;

      this._userService.forgetPassword(email).subscribe({
        next: (response) =>{
          console.log(response);
        },
        complete: () =>{},
        error: (error) =>{
          console.log(error.message);
        }
        
      })
    }
  }
}
