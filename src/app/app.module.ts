import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: ':id', component: UsersprofileComponent },
  { path: '', component: HomeComponent , pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    UserslistComponent,
    UsersprofileComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
