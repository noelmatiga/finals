import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginscreen',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'flights',
    loadChildren: () => import('./flights/flights.module').then( m => m.FlightsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'updateflight',
    loadChildren: () => import('./updateflight/updateflight.module').then( m => m.UpdateflightPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'bookedflight',
    loadChildren: () => import('./bookedflight/bookedflight.module').then( m => m.BookedflightPageModule)
  },
  {
    path: 'adminlog',
    loadChildren: () => import('./adminlog/adminlog.module').then( m => m.AdminlogPageModule)
  },
  {
    path: 'receipt',
    loadChildren: () => import('./receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
  {
    path: 'bookflight',
    loadChildren: () => import('./bookflight/bookflight.module').then( m => m.BookflightPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
