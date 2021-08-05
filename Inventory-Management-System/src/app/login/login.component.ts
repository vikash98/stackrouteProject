import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginHeader="Inventory Management System";
  loginSubheader="Please Authorize as an Admin";
  userName="User Name";
  loginPass="Password";

  contactForm = new FormGroup({
    userName: new FormControl('', Validators.compose([Validators.minLength(4), Validators.required])),
    password: new FormControl('', [Validators.required])  
  })
  onSubmit() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.invalid);
  }

onLogin() {
  console.log("Fome Submit Successfull");
}
  constructor() { }

  ngOnInit(): void {
   
  }

}
