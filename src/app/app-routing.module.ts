import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './pages/dashboard-client/dashboard-client.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AjoutAnnonceComponent } from './components/ajout-annonce/ajout-annonce.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'authentication', component: AuthenticationPageComponent },
  { path: 'dashboard', component: DashboardClientComponent },
  { path: 'annonce', component: AjoutAnnonceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
