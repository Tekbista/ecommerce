import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _userService: UserService) { }
  message: string = '';
  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required])
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
