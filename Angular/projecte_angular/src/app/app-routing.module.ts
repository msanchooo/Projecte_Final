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

const routes: Routes = [
  {path:'body', component: BodyComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'pack1', component: Pack1Component},
  {path:'pack2', component: Pack2Component},
  {path:'pack3', component: Pack3Component},
  {path:'contacto', component: ContactoComponent},
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
