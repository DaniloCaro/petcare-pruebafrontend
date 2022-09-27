//Modules
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Components
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
      //{ path: '**', redirectTo: 'login' }
      //{ path: 'forgot', component: ForgotComponent },
      //{ path: 'registration', component: RegistrationComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
