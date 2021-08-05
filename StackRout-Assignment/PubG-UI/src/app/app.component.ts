import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'PubGUI';
  private userLoggedIn: false;
  private subscription: Subscription;
  
  isLoggedIn$: Observable<boolean>;                  // {1}
  constructor(private authService: AuthService, private router:Router){ }
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.userLoggedIn;
  }
  

}
