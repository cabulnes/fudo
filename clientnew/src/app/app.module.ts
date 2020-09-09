import { BrowserModule } from '@angular/platform-browser';
//import { AnimationsModule } from '@angular/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';;
import { NavbarComponent } from './components/navbar/navbar.component';

import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    BrowserAnimationsModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
