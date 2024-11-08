import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './landing/services/services.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./landing/landing.module').then(module => module.LandingModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule)
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
