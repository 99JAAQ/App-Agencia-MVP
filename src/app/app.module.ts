import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { UserComponent } from './Administration/user/user.component';
import { FormUserComponent } from './Administration/user/form-user/form-user.component';
import { TableUserComponent } from './Administration/user/table-user/table-user.component';
import { appRoutes } from './app.routes';


// Importar módulos de PrimeNG
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipModule } from 'primeng/chip';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../service/productservice';
import { HttpClientModule } from '@angular/common/http';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { PasswordModule } from 'primeng/password';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    UserComponent,
    FormUserComponent,
    TableUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ButtonModule,
    SplitButtonModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextareaModule,
    ChipModule,
    MultiSelectModule,
    CardModule,
    DataViewModule,
    RatingModule,
    TagModule,
    HttpClientModule,
    DividerModule,
    PanelModule,
    DialogModule,
    SidebarModule,
    SpeedDialModule,
    CarouselModule,
    PasswordModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
