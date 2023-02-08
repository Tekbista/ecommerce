import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/models/state';
import { UserProfile } from 'src/app/models/user-profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: UserProfile = new UserProfile("", "", "", "", "", new State(0, ""), "", "");
  states: State[] = [];
  isProfileDisable = true;
  profileForm = new FormGroup({
    firstName: new FormControl({value: '', disabled:true},[Validators.required]),
    lastName: new FormControl({value: '', disabled:true}, [Validators.required]),
    address1: new FormControl({value: '', disabled:true}, [Validators.required]),
    address2: new FormControl({value: '', disabled:true}),
    city: new FormControl({value: '', disabled:true}, [Validators.required]),
    state: new FormControl({value: '', disabled:true}, [Validators.required]),
    zipCode: new FormControl({value: '', disabled:true}, [Validators.required]),
    phone: new FormControl({value: '', disabled:true},[Validators.pattern('^(6|7|8|9)[0-9]{9}$'), Validators.required])
    
  })
  

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUserProfile();
    this.getStates();
    
  }

  
  getUserProfile(){
    this._userService.getUserDetails().subscribe({
      next: (response) => {
        this.userProfile = response;
      },
      complete: () =>{this.updateProfile()},
      error: (error) =>{console.log(error)}      
    })
  }

  getStates(){
    this._userService.getAllStates().subscribe({
      next: (response) =>{this.states = response},
      complete: () =>{},
      error: (error) =>{console.log(error)}
    })
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: this.userProfile.firstName,
      lastName: this.userProfile.lastName,
      address1: this.userProfile.address1,
      address2: this.userProfile.address2,
      city: this.userProfile.city,
      state: this.userProfile.state,
      zipCode: this.userProfile.zipCode,
      phone: this.userProfile.phone
    })
  }

  enableProfileForm(){
    this.profileForm.controls['firstName'].enable()
    this.profileForm.controls['lastName'].enable()
    this.profileForm.controls['address1'].enable()
    this.profileForm.controls['address2'].enable()
    this.profileForm.controls['city'].enable()
    this.profileForm.controls['state'].enable()
    this.profileForm.controls['zipCode'].enable()
    this.profileForm.controls['phone'].enable()
  }
  
  onProfileEdit(){
    this.isProfileDisable = false;
    this.enableProfileForm();
  }

  onSubmit(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value)
      this.userProfile.firstName = this.profileForm.value['firstName'];
      this.userProfile.lastName = this.profileForm.value['lastName']
      this.userProfile.address1 = this.profileForm.value['address1']
      this.userProfile.address2 = this.profileForm.value['address2']
      this.userProfile.city = this.profileForm.value['city']
      this.userProfile.state = this.profileForm.value['state']
      this.userProfile.zipCode = this.profileForm.value['zipCode']
      this.userProfile.phone = this.profileForm.value['phone']
    }
  }
}
