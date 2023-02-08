import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegistrationComponentComponent } from './components/registration-component/registration-component.component';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductLoadPageComponent } from './pages/product-load-page/product-load-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "register", component: SignupPageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "forgetpassword", component: ForgotPasswordComponent},
  {path: "resetpassword", component: ResetPassowrdComponent},
  {path: "plp", component: ProductLoadPageComponent},
  {path: "category/:name", component: ProductLoadPageComponent},
  {path: "pdp/:id", component: ProductDetailPageComponent},
  {path: "cart", component: ShoppingCartPageComponent},
  {path: "profile", component: ProfilePageComponent, canActivate: [AuthGuardGuard]},
  {path: "billing", component: BillingPageComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
