import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KilidLogoComponent } from './components/kilid-logo/kilid-logo.component';
import { AutocompeleteComponent } from './components/autocompelete/autocompelete.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    KilidLogoComponent,
    AutocompeleteComponent,
    DropdownComponent,
    DownloadAppComponent,
    FooterComponent,

  ],
  exports:[
    KilidLogoComponent,
    AutocompeleteComponent,
    DropdownComponent,
    DownloadAppComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
