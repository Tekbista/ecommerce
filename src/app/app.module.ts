import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponentComponent } from './components/registration-component/registration-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';
import { NewArrivalsComponent } from './components/contents/new-arrivals/new-arrivals.component';
import { TrendingNowComponent } from './components/contents/trending-now/trending-now.component';
import { BestSellingComponent } from './components/contents/best-selling/best-selling.component';
import { OfferComponent } from './components/contents/offer/offer.component';
import { ProductLoadPageComponent } from './pages/product-load-page/product-load-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { BillingComponentComponent } from './components/billing-component/billing-component.component';
import { ShippingComponentComponent } from './components/shipping-component/shipping-component.component';
import { PaymentComponentsComponent } from './components/payment-components/payment-components.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ErrorComponent } from './components/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    ResetPassowrdComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    HomePageComponent,
    HeaderComponent,
    PromoBannerComponent,
    FooterComponent,
    ContentsComponent,
    NewArrivalsComponent,
    TrendingNowComponent,
    BestSellingComponent,
    OfferComponent,
    ProductLoadPageComponent,
    CategoryComponent,
    ProductDetailPageComponent,
    ShoppingCartPageComponent,
    ShoppingCartComponent,
    ProfilePageComponent,
    ProfileComponent,
    FilterMenuComponent,
    ProductDetailComponent,
    BillingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    BillingComponentComponent,
    ShippingComponentComponent,
    PaymentComponentsComponent,
    ItemCardComponent,
    OrderSummaryComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
