import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,  FacebookLoginProvider} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernavigationComponent } from './usernavigation/usernavigation.component';
import { HomebackgroundComponent } from './homebackground/homebackground.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { TodaySpecialComponent } from './today-special/today-special.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenAuthService } from './token-auth.service';
import { FormsModule } from '@angular/forms';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    UsernavigationComponent,
    HomebackgroundComponent,
    ShowCategoryComponent,
    TodaySpecialComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    UserSignInComponent,
    UserSignUpComponent,
    ViewCartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // SocialLoginModule
  ],
  providers: [UserService,CategoryService,ProductService,OrderService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenAuthService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
