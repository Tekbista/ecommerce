import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { State } from 'src/app/models/state';
import { UserProfile } from 'src/app/models/user-profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: UserProfile = new UserProfile("", "", new Address(0, "", "", "", new State(0, ""), ""),  "");
  states: State[] = [];
  isProfileDisable = true;
  profileForm!: FormGroup;
  

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUserProfile();
    this.getStates();
    this.initializeProfileForm()
  }

  initializeProfileForm(){

    this.profileForm = new FormGroup({
      firstName: new FormControl({value: '', disabled:true},[Validators.required]),
      lastName: new FormControl({value: '', disabled:true}, [Validators.required]),
      address1: new FormControl({value: '', disabled:true}, [Validators.required]),
      address2: new FormControl({value: '', disabled:true}),
      city: new FormControl({value: '', disabled:true}, [Validators.required]),
      state: new FormControl({value: null, disabled:true}, [Validators.required]),
      zipCode: new FormControl({value: '', disabled:true}, [Validators.required]),
      phone: new FormControl({value: '', disabled:true},[Validators.pattern('^[0-9]{10}$'), Validators.required])
      
    })
  }
  getUserProfile(){
    this._userService.getUserDetails().subscribe({
      next: (response) => {
        this.userProfile = response;
      },
      complete: () =>{
        console.log(this.userProfile)
        this.updateProfile()
      },
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
      address1: this.userProfile.address?.address1,
      address2: this.userProfile.address?.address2,
      city: this.userProfile.address?.city,
      state: this.userProfile.address?.state?.name,
      zipCode: this.userProfile.address?.zipCode,
      phone: this.userProfile.phone
    })
  }

  enableProfileForm(){
    this.profileForm.controls['address1'].enable()
    this.profileForm.controls['address2'].enable()
    this.profileForm.controls['city'].enable()
    this.profileForm.controls['state'].enable()
    this.profileForm.controls['zipCode'].enable()
    this.profileForm.controls['phone'].enable()
  }

  disableProfileForm(){
    this.profileForm.controls['address1'].disable()
    this.profileForm.controls['address2'].disable()
    this.profileForm.controls['city'].disable()
    this.profileForm.controls['state'].disable()
    this.profileForm.controls['zipCode'].disable()
    this.profileForm.controls['phone'].disable()
  }
  
  onProfileEdit(){
    this.isProfileDisable = !this.isProfileDisable;
    this.enableProfileForm();
  }

  onSubmit(){
    if(this.profileForm.valid){
      this.userProfile.address!.address1 = this.profileForm.value['address1']
      this.userProfile.address!.address2 = this.profileForm.value['address2']
      this.userProfile.address!.city = this.profileForm.value['city']
      this.userProfile.address!.zipCode = this.profileForm.value['zipCode']
      this.userProfile.phone = this.profileForm.value['phone']
      
    }
    this.disableProfileForm()
    this.isProfileDisable = !this.isProfileDisable;
    console.log(this.userProfile)
    this._userService.updateUserProfile(this.userProfile).subscribe({
      next: (response) =>{this.userProfile = response},
      complete: () =>{},
      error: (error) =>{console.log(error)}
    })
  }

  onSelectChange(event: any){
    let id =  Number(event.target.value)
    for(let state of this.states){
      if(state.stateId === id){
        this.userProfile.address!.state = state
      }
    }
  }
}
