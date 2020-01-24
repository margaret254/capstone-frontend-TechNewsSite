import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})

export class SignupComponent implements OnInit {
  register;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.register = {
      username: '',
      pasword: '',
      email: ''
    };
  }
  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        alert("User " + this.register.username + " has been created.")
      },
      error => console.log('error', error)
    );
  }

}
