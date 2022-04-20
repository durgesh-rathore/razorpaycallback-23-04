import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
// import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ShowCategoryComponent } from './show-category/show-category.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [{ path: "signup", component: UserSignUpComponent },
{ path: "signin", component: UserSignInComponent },
//  { path: "home", component: ShowCategoryComponent },
{
  path: "viewcart",
  component: ViewCartComponent,
  //  canActivate:[AuthGuard] 
},
//  {
//    path: "aboutus",
//    component: AboutusComponent
//   //  canActivate: [AuthGuard]
//  },
//  {
//    path: "contactus",
//    component:ContactusComponent
//   //  canActivate: [AuthGuard]
//  },
// {
//   path:"viewCart",
//   component:ViewCartComponent,
//   canActivate:[AuthGuard]
// },
// { path: "edit-category/:cid", component: EditCategoryComponent },
// { path: "edit-product/:pid", component: EditProductComponent},
 { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
