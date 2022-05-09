import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
                        {path:"login",component:LoginComponent},
                        {path:"profile",component:UsersComponent},
                        {path:"timetable",component:TimeTableComponent},
                        {path:"activity",component:ActivitiesComponent},
                        {path:"signin",component:SigninComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
