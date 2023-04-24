import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';


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
import {MatMenuModule} from '@angular/material/menu'; 


// Import the module from the SDK
// import { AuthModule } from '@auth0/auth0-angular';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CalendarComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    // AuthModule.forRoot({
    //   domain: 'dev-iozfacvvx67ur8w5.us.auth0.com',
    //   clientId: 'KucEEziF4NMQ6ggT6RXZfPHDPpJft1l2',
    //   authorizationParams: {
    //     redirect_uri: window.location.origin
    //   }
    // }),
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

