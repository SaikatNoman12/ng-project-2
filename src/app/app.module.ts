import { ProductsItem } from './galleryModal/products';
import { GalleryItemData } from './galleryModal/gallery';
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
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { ProductsItemComponent } from './products-item/products-item.component';

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
    ImageTwoComponent,
    ImageThreeComponent,
    ImageFourComponent,
    LoginComponent,
    GalleryItemComponent,
    ProductsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    HeaderServiceService,
    GalleryItemData,
    ProductsItem
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
