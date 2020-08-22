import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    UserslistComponent,
    UsersprofileComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
