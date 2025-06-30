import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ResetPasswordComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
