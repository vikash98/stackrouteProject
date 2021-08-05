import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 loggedInUser:String;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    if(this.authService.isLoggedIn){}
    this.loggedInUser=sessionStorage.getItem('username');
  }
  }


