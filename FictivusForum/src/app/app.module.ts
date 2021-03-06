import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {Restdata} from "./helpers/restdata";
import {TokenService} from './helpers/token.service';
import {AuthGuardService} from './helpers/authguard.service';
import {AuthInterceptor} from './helpers/auth-interceptor';
import {AuthenticationService} from './services/authentication.service';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ModreleaseComponent } from './components/modrelease/modrelease/modrelease.component';
import { DiscussieComponent } from './components/discussie/discussie.component';
import { MemesComponent } from './components/memes/memes.component';
import { TopicbuilderComponent } from './components/topicbuilder/topicbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterpageComponent,
    HomepageComponent,
    ModreleaseComponent,
    DiscussieComponent,
    MemesComponent,
    TopicbuilderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ 
    AuthenticationService,
    Restdata,
    AuthGuardService,
    AuthInterceptor,
    TokenService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
