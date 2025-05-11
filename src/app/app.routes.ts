import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SignupComponent } from '../signup/signup.component';
export const routes: Routes = [

    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'signup', component: SignupComponent},
    
];
