import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Pack1Component } from './pack1/pack1.component';
import { Pack2Component } from './pack2/pack2.component';
import { Pack3Component } from './pack3/pack3.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AuthGuard } from 'src/app/login-token/_helpers/auth.guard';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ServeiListComponent } from './servei-list/servei-list.component';
import { ServeiFormComponent } from './servei-form/servei-form.component';
import { ServeiFormEditComponent } from './servei-form-edit/servei-form-edit.component';
import { VehicleFormEditComponent } from './vehicle-form-edit/vehicle-form-edit.component';
import { TreballadorListComponent } from './treballador-list/treballador-list.component';
import { TreballadorFormComponent } from './treballador-form/treballador-form.component';
import { TreballadorFormEditComponent } from './treballador-form-edit/treballador-form-edit.component';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaFormComponent } from './factura-form/factura-form.component';
import { BorrarComponent } from './borrar/borrar.component';
import { FacturaDownloadComponent } from './factura-download/factura-download.component';
import { LoginTokenComponent } from './login-token/login-token.component';


const routes: Routes = [
  {path:'body', component: BodyComponent,},
  {path:'servicios', component: ServiciosComponent},
  {path:'pack1', component: Pack1Component},
  {path:'pack2', component: Pack2Component},
  {path:'pack3', component: Pack3Component},
  {path:'contacto', component: ContactoComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'carrito', component: CarritoComponent},

  
  {path:'vehicle-list', component: VehicleListComponent},
  {path:'vehicle-form', component: VehicleFormComponent},
  {path:'vehicle-form-edit/:id', component: VehicleFormEditComponent},
  {path:'client-list', component: ClientListComponent},
  {path:'servei-list', component: ServeiListComponent},
  {path:'servei-form', component: ServeiFormComponent},
  {path:'servei-form-edit/:id', component: ServeiFormEditComponent},
  {path:'user-list', component: ClientListComponent},
  {path:'treballador-list', component: TreballadorListComponent},
  {path:'treballador-form', component: TreballadorFormComponent},
  {path:'treballador-form-edit/:id', component: TreballadorFormEditComponent},
  {path:'factura-list', component: FacturaListComponent},
  {path:'factura-form', component: FacturaFormComponent},
  {path:'borrar', component: BorrarComponent},
  {path:'factura-download/:id', component: FacturaDownloadComponent},
  { path: 'login-token', component: LoginTokenComponent },
  { path: '', component: BodyComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}

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
