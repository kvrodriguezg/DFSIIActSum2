import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CategoriaDesayunosComponent } from './pages/categoria-desayunos/categoria-desayunos.component';
import { CategoriaAlmuerzosComponent } from './pages/categoria-almuerzos/categoria-almuerzos.component';
import { CategoriaVeganasComponent } from './pages/categoria-veganas/categoria-veganas.component';
import { CategoriaPostresComponent } from './pages/categoria-postres/categoria-postres.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' },
  { path: 'categoria-desayunos', component: CategoriaDesayunosComponent },
  { path: 'categoria-almuerzos', component: CategoriaAlmuerzosComponent },
  { path: 'categoria-veganas', component: CategoriaVeganasComponent },
  { path: 'categoria-postres', component: CategoriaPostresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
