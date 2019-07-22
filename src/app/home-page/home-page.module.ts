import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { HomePageMenuComponent } from './components/general/home-page-menu/home-page-menu.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageHeaderComponent } from './components/general/home-page-header/home-page-header.component';
import { LoginButtonComponent } from './components/general/login-button/login-button.component';
import { SignupButtonComponent } from './components/general/signup-button/signup-button.component';
import { HomePageSearchBoxComponent } from './components/general/home-page-search-box/home-page-search-box.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePriceEvaluationComponent } from './components/general/home-price-evaluation/home-price-evaluation.component';
import { HomePageFlexContainerComponent } from './components/general/home-page-flex-container/home-page-flex-container.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomePageMenuComponent, 
    HomePageHeaderComponent, LoginButtonComponent, 
    SignupButtonComponent,
     HomePageSearchBoxComponent,
     HomePriceEvaluationComponent,
     HomePageFlexContainerComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    

  ],
  exports:[
    HomePageComponent,
    HomePageMenuComponent
  ],
})
export class HomePageModule { }
