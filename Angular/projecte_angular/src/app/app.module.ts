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
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';

// Import the module from the SDK
// import { AuthModule } from '@auth0/auth0-angular';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './login_material/register/register.component';
import { UserlistingComponent } from './login_material/userlisting/userlisting.component';
import { UpdatepopupComponent } from './login_material/updatepopup/updatepopup.component';
import { LoginMaterialComponent } from './login_material/login-material/login-material.component';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleListFilterPipe } from './vehicle-list/vehicle-list-filter.pipe';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientListFilterPipe } from './client-list/client-list-filter.pipe';

import { ServeiListComponent } from './servei-list/servei-list.component';
import { ServeiListFilterPipe } from './servei-list/servei-list-filter.pipe';
import { ServeiFormComponent } from './servei-form/servei-form.component';

import { UserListComponent } from './user-list/user-list.component';
import { AdminComponent } from './admin/admin.component';
import { ServeiFormEditComponent } from './servei-form-edit/servei-form-edit.component';
import { VehicleFormEditComponent } from './vehicle-form-edit/vehicle-form-edit.component';
import { TreballadorListComponent } from './treballador-list/treballador-list.component';
import { TreballadorListFilterPipe } from './treballador-list/treballador-list-filter.pipe';
import { TreballadorFormComponent } from './treballador-form/treballador-form.component';
import { TreballadorFormEditComponent } from './treballador-form-edit/treballador-form-edit.component';
import { LoginTokenComponent } from './login-token/login-token.component';


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
    RegisterComponent,
    UserlistingComponent,
    UpdatepopupComponent,
    LoginMaterialComponent,

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
    ServeiFormEditComponent,
    VehicleFormEditComponent,
    TreballadorListComponent,
    TreballadorListFilterPipe,
    TreballadorFormComponent,
    TreballadorFormEditComponent,
    LoginTokenComponent,
  ],

  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports: [MatMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
