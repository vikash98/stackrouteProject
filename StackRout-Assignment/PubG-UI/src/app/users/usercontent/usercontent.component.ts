import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usercontent',
  templateUrl: './usercontent.component.html',
  styleUrls: ['./usercontent.component.css']
})
export class UsercontentComponent implements OnInit {

  content: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
      this.userService.getByUserRole().subscribe(
          data => {
              this.content = data;
          },
          error => {
              this.content = error;
          }
      );
  }
}