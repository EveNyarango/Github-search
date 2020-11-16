import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';


import { SearchComponent } from './search/search.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { HoveringDirective } from './hovering.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    RepositoriesComponent,
    SearchComponent,
    DateAgoPipe,
    HoveringDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
