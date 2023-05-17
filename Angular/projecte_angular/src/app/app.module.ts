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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// Import the module from the SDK
// import { AuthModule } from '@auth0/auth0-angular';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CartService } from 'src/services/cart.service';
import { StoreService } from 'src/services/store.service';
import {MatSelectModule} from '@angular/material/select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleListFilterPipe } from './vehicle-list/vehicle-list-filter.pipe';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientListFilterPipe } from './client-list/client-list-filter.pipe';

import { ServeiListComponent } from './servei-list/servei-list.component';
import { ServeiListFilterPipe } from './servei-list/servei-list-filter.pipe';
import { ServeiFormComponent } from './servei-form/servei-form.component';

import { UserListComponent } from './user-list/user-list.component';
import { ServeiFormEditComponent } from './servei-form-edit/servei-form-edit.component';
import { VehicleFormEditComponent } from './vehicle-form-edit/vehicle-form-edit.component';
import { TreballadorListComponent } from './treballador-list/treballador-list.component';
import { TreballadorListFilterPipe } from './treballador-list/treballador-list-filter.pipe';
import { TreballadorFormComponent } from './treballador-form/treballador-form.component';
import { TreballadorFormEditComponent } from './treballador-form-edit/treballador-form-edit.component';
import { ContactService } from 'src/services/contact.service';


import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaFormComponent } from './factura-form/factura-form.component';
import { BorrarComponent } from './borrar/borrar.component';
import { FacturaDownloadComponent } from './factura-download/factura-download.component';

import { LoginTokenComponent } from './auth/login/login-token.component';
import { fakeBackendProvider } from './auth/_helpers/fake-backend';
import { JwtInterceptor } from './auth/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './auth/_helpers/error.interceptor';
import { RegisterComponent } from './auth/register/register.component';

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
    TiendaComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CarritoComponent,
    VehicleListComponent,
    ClientListComponent,
    UserListComponent,
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
    FacturaListComponent,
    FacturaFormComponent,
    BorrarComponent,
    FacturaDownloadComponent,
    LoginTokenComponent,
    RegisterComponent,    
  ],

  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],

  exports: [
    MatMenuModule,
  ],

  providers: [
    CartService, 
    StoreService, 
    ContactService, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],

  bootstrap: [
    AppComponent,
    // FormsModule,
    // ReactiveFormsModule,
    // FormsModule,
    // MaterialModule,
    // HttpClientModule,
  ]
})
export class AppModule {}
