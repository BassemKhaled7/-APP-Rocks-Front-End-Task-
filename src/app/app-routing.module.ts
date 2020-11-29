import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PromotionDetailsComponent } from './promotion-details/promotion-details.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'promotionsDetails', component:PromotionDetailsComponent},

  {path: 'search/result', component:SearchResultComponent},
  {path: 'auth', component:AuthComponent, children: [
    {path: '', component:SignupComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'login', component:LoginComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
