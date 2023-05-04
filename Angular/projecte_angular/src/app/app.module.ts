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

// import { ToastrModule } from 'ngx-toastr';

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
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
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
  ],
  exports: [
    MatMenuModule,
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ]

})
export class AppModule {}
