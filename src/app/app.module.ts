import { ImageThreeComponent } from './gallery/image-three/image-three.component';
import { ImageTwoComponent } from './gallery/image-two/image-two.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderItemComponent } from './header/header-item/header-item.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './error/error.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { HeaderServiceService } from './appService/header-service.service';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { TvComponent } from './products/tv/tv.component';
import { ImageOneComponent } from './gallery/image-one/image-one.component';
import { ImageFourComponent } from './gallery/image-four/image-four.component';
import { LoginComponent } from './login/login.component';

const router: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  {
    path: 'gallery', children: [
      { path: '', component: GalleryComponent },
      { path: 'image-1', component: ImageOneComponent },
      { path: 'image-2', component: ImageTwoComponent },
      { path: 'image-3', component: ImageThreeComponent },
      { path: 'image-4', component: ImageFourComponent },
    ]
  },
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'washing-machine', component: WashingMachineComponent },
      { path: 'tv', component: TvComponent },
    ]
  },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    ProductsComponent,
    ContactUsComponent,
    ErrorComponent,
    LaptopComponent,
    MobileComponent,
    WashingMachineComponent,
    TvComponent,
    ImageOneComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    HeaderServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
