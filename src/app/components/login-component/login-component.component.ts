import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  token: string = '';
  errorMsg: string = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
     let login = new Login(
        this.loginForm.value.email,
        this.loginForm.value.password
      )

      this._userService.login(login).subscribe({
        next: (response) =>  {
          this.token = response.token;
        },
        complete: () => {
          this.loginForm.reset()
          if(this.token !== ""){
            localStorage.setItem("token", this.token);
            this.router.navigate(["/profile"]);
          }
        },
        error: (error) => {
          this.errorMsg = error.error;
          console.log(error)
          this.formReset();
        }
      });
    }

    
  }

  formReset(){
    this.loginForm.reset();
    this.loginForm.controls['email'].setErrors(null);
    this.loginForm.controls['password'].setErrors(null);
    this.loginForm.markAsUntouched();
  }
}
