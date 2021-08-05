import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AdminComponent } from './users/admin/admin.component';
import { MatchesComponent } from './matches/matches.component';
import { AllusersComponent } from './users/allusers/allusers.component';
import { UsercontentComponent } from './users/usercontent/usercontent.component';
import { LogoutComponent } from './logout/logout.component';
import { FavrouitesComponent } from './favrouites/favrouites.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, 
  {path: 'signup', component: RegisterComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'dashboard', component: DashboardComponent},
  {path: 'allusers', canActivate: [AuthGuardService], component: AllusersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tournaments',  component:DepartmentsComponent} ,
  {path: 'usercontent', component: UsercontentComponent},
  {path: 'admincontent', component: AdminComponent} ,   
  {path:'matches/:matchId', component:MatchesComponent},
  {path:'logout', component:LoginComponent},
  {path:'favourites', canActivate: [AuthGuardService], component:FavrouitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
