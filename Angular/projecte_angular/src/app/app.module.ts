import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Pack1Component } from './pack1/pack1.component';
import { Pack2Component } from './pack2/pack2.component';
import { Pack3Component } from './pack3/pack3.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleListFilterPipe } from './vehicle-list/vehicle-list-filter.pipe';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientListFilterPipe } from './client-list/client-list-filter.pipe';

import { ServeiListComponent } from './servei-list/servei-list.component';
import { ServeiListFilterPipe } from './servei-list/servei-list-filter.pipe';
import { ServeiFormComponent } from './servei-form/servei-form.component';

import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ServeiFormEditComponent } from './servei-form-edit/servei-form-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    ServiciosComponent,
    ContactoComponent,
    Pack1Component,
    Pack2Component,
    Pack3Component,
    InicioComponent,
    DashboardComponent,
    VehicleListComponent,
    ClientListComponent,
    UserListComponent,
    AdminComponent,
    ClientListFilterPipe,
    VehicleListFilterPipe,
    VehicleFormComponent,
    ServeiListComponent,
    ServeiListFilterPipe,
    ServeiFormComponent,
    ServeiFormEditComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-iozfacvvx67ur8w5.us.auth0.com',
      clientId: 'KucEEziF4NMQ6ggT6RXZfPHDPpJft1l2',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
