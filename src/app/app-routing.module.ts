import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//SubRoutesModules
import { AuthRoutingModule } from './auth/auth-routing.module';
import { WebsiteRoutingModule } from './website/website-routing.module';

import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    WebsiteRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
