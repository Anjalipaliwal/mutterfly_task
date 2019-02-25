import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { imageservice } from './imageservice.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    imageservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
