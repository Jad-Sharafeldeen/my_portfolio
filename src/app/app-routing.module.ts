import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { MobileDevelopmentComponent } from './pages/mobile-development/mobile-development.component';
import { AdvertisingComponent } from './pages/advertising/advertising.component';
import { TeachingComponent } from './pages/teaching/teaching.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Service Pages
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'mobile-development', component: MobileDevelopmentComponent },
  { path: 'advertising', component: AdvertisingComponent },
  { path: 'teaching', component: TeachingComponent },

  // Wildcard redirect
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
