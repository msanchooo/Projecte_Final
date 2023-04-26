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
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { LoginMaterialComponent } from './login_material/login-material/login-material.component';
import { RegisterComponent } from './login_material/register/register.component';
import { UserlistingComponent } from './login_material/userlisting/userlisting.component';
import { AuthGuard } from 'src/app/login_material/guard/auth.guard';

const routes: Routes = [
  {path:'body', component: BodyComponent, canActivate:[AuthGuard]},
  {path:'servicios', component: ServiciosComponent},
  {path:'pack1', component: Pack1Component},
  {path:'pack2', component: Pack2Component},
  {path:'pack3', component: Pack3Component},
  {path:'contacto', component: ContactoComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'login', component: LoginComponent},

  {path: 'login-material', component: LoginMaterialComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserlistingComponent, canActivate:[AuthGuard]},
  {path:'', redirectTo:'body', pathMatch: 'full'},
  {path:'**', redirectTo:'body', pathMatch: 'full'},
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
