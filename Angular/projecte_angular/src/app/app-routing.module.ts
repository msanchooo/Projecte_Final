import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path:'body', component: BodyComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'', redirectTo:'welcome', pathMatch: 'full'},
  {path:'**', redirectTo:'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
