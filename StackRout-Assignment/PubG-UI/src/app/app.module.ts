import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LoginComponent } from './auth/login/login.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './users/user/user.component';
import { AdminComponent } from './users/admin/admin.component';
import { UsercontentComponent } from './users/usercontent/usercontent.component';
import { AllusersComponent } from './users/allusers/allusers.component';
import { MatchesComponent } from './matches/matches.component';
import { LogoutComponent } from './logout/logout.component';
import { FavrouitesComponent } from './favrouites/favrouites.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserComponent,
    AdminComponent,
    UsercontentComponent,
    AllusersComponent,
    DepartmentsComponent,
    MatchesComponent,
    LogoutComponent,
    FavrouitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
