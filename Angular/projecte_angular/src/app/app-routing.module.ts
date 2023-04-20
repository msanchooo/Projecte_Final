import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Pack1Component } from './pack1/pack1.component';
import { Pack2Component } from './pack2/pack2.component';
import { Pack3Component } from './pack3/pack3.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AdminComponent } from './admin/admin.component';
import { ServeiListComponent } from './servei-list/servei-list.component';
import { ServeiFormComponent } from './servei-form/servei-form.component';
import { ServeiFormEditComponent } from './servei-form-edit/servei-form-edit.component';
import { VehicleFormEditComponent } from './vehicle-form-edit/vehicle-form-edit.component';
import { TreballadorListComponent } from './treballador-list/treballador-list.component';

const routes: Routes = [
  {path:'body', component: BodyComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'pack1', component: Pack1Component},
  {path:'pack2', component: Pack2Component},
  {path:'pack3', component: Pack3Component},
  {path:'contacto', component: ContactoComponent},
  {path:'admin', component: AdminComponent},
  {path:'vehicle-list', component: VehicleListComponent},
  {path:'vehicle-form', component: VehicleFormComponent},
  {path:'vehicle-form-edit/:id', component: VehicleFormEditComponent},
  {path:'client-list', component: ClientListComponent},
  {path:'servei-list', component: ServeiListComponent},
  {path:'servei-form', component: ServeiFormComponent},
  {path:'servei-form-edit/:id', component: ServeiFormEditComponent},
  {path:'user-list', component: ClientListComponent},
  {path:'treballador-list', component: TreballadorListComponent},
  {path:'', redirectTo:'body', pathMatch: 'full'},
  {path:'**', redirectTo:'body', pathMatch: 'full'}
  // { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  // { path: 'inicio', component: InicioComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
