import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = '';
  email = '';
  password = '';
  cfPassword = '';

  onFormSubmit() {
    if (!(this.password === this.cfPassword)) {
      alert('Passwords must match!');
    }
    else {
      alert('Form success!'); // remove later
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
