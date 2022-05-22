import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HeaderModule } from '@shared/components/header/header.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
HeaderModule,
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule
  ]
})
export class HomeModule { }
