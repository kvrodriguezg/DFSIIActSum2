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
import { NavComponent } from './shared/nav/nav.component';
import { CategoriaDesayunosComponent } from './pages/categoria-desayunos/categoria-desayunos.component';
import { CategoriaAlmuerzosComponent } from './pages/categoria-almuerzos/categoria-almuerzos.component';
import { CategoriaVeganasComponent } from './pages/categoria-veganas/categoria-veganas.component';
import { CategoriaPostresComponent } from './pages/categoria-postres/categoria-postres.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
  declarations: [HomeComponent, AppComponent, LoginComponent, NavComponent, ResetPasswordComponent, RegisterComponent, CategoriaDesayunosComponent, CategoriaAlmuerzosComponent, CategoriaVeganasComponent, CategoriaPostresComponent],
  imports: [RouterModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
