import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { DiscussieComponent } from './components/discussie/discussie.component';
import { ModreleaseComponent } from './components/modrelease/modrelease/modrelease.component';
import { MemesComponent } from './components/memes/memes.component';

const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'}, {path: 'registration', component: RegisterpageComponent},
{path:'home', component: HomepageComponent},
{path:'registration', component: RegisterpageComponent},
{path:'discussies', component: DiscussieComponent},
{path:'modreleases', component: ModreleaseComponent },
{path:'memes', component: MemesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
