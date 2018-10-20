import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  { path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
