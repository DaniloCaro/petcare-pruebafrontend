//Modules
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Components
import { HomeComponent } from './pages/home/home.component';
//Guards
import { UserGuardGuard } from '../user-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [UserGuardGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
