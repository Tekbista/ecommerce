import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: UserProfile = new UserProfile("", "", "", "", "", "", "", "");


  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUserDetails().subscribe({
      next: (response) => {
        this.userProfile = response;
        console.log(response)
      },
      complete: () =>{},
      error: (error) =>{console.log(error)}      
    })
  }

}
