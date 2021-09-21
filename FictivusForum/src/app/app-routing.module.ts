import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';

const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'}, {path: 'registration', component: RegisterpageComponent},
{path:'home', component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
