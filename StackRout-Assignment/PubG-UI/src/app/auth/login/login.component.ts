import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router){ }
  submitted = false;
  errorMessage = '';
  isLoggedin = false;
  isLoginFailed = false;
  private userLoggedIn: any;
private subscription: Subscription;

  ngOnInit() {
      this.loginForm = new FormGroup({
          userName: new FormControl(null, Validators.required),
          password: new FormControl(null, Validators.required),
      });

      this.subscription = this.authService.getLoggedIn().subscribe(value => {
          alert(value)
        this.userLoggedIn = value;
    });

  }
  onSubmit(){
      this.submitted = true;
      this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
          data=>{
              this.isLoggedin = true
              this.router.navigate(['/dashboard']);
          },
          error=>{
              console.log(error);
              this.errorMessage = error;
              this.isLoggedin = false;
              this.isLoginFailed = true;
          }
      );
  }
  ngOnDestroy(): void {

    if(this.subscription){
        this.subscription.unsubscribe();
    }
  
}}