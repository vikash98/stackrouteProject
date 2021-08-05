import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from './department.service';
import { BehaviorSubject,Subject } from 'rxjs';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
departmentList:any;
error:string;
pageOfItems: Array<any>;
matched:any;
selectedTour:any;
public matchedDataObject:any=new Object();
public subject=new Subject<any>();
public messageSource=new BehaviorSubject(this.matchedDataObject);

  constructor(private departmentService:DepartmentService, private router:Router) { }
  ngOnInit() {
    this.departmentService.getAllDepartments().subscribe(
      data => {
          this.departmentList = data.data;
      },
      error => {
          this.error = error;
      }
  );
  }
   showMatches(event:any, tournaments:any){
    this.departmentService.getMatchesByTourmentId(tournaments.id).subscribe(
      data => {
          this.matched = data;          
          this.messageSource.next(data);
          this.selectedTour=tournaments.type;
          this.router.navigate(['matches', tournaments.id]);
      },
      error => {
          this.error = error;
        }
        );
   }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
