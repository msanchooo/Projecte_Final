import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'body', component: BodyComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'', redirectTo:'body', pathMatch: 'full'},
  {path:'**', redirectTo:'body', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
