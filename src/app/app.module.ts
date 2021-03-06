import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
