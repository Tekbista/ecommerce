import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { comparePassword } from './compare-password-validators';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  successMsg: string = '';
  registrationForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    confirmpassword: new FormControl('', [Validators.required, comparePassword])
  })
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.registrationForm.valid){
      var user = new User(
        this.registrationForm.value.firstname,
        this.registrationForm.value.lastname,
        this.registrationForm.value.email,
        this.registrationForm.value.password,
        this.registrationForm.value.confirmpassword

      )
      this._userService.registerUser(user).subscribe({
        next: (response) =>  {
          this.successMsg = response.message;
        },
        complete: () => {this.formReset()},
        error: (error) => {
          console.log(`Error[status ]${error.status}: ${error.message}`);
          this.formReset();
        }
      });
    }
  }

  formReset(){
    this.registrationForm.reset();
    this.registrationForm.controls['firstname'].setErrors(null);
    this.registrationForm.controls['lastname'].setErrors(null);
    this.registrationForm.controls['email'].setErrors(null);
    this.registrationForm.controls['password'].setErrors(null);
    this.registrationForm.controls['confirmpassword'].setErrors(null);
  }
}
