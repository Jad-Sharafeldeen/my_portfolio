import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { MobileDevelopmentComponent } from './pages/mobile-development/mobile-development.component';
import { AdvertisingComponent } from './pages/advertising/advertising.component';
import { TeachingComponent } from './pages/teaching/teaching.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    WorkComponent,
    WebDevelopmentComponent,
    MobileDevelopmentComponent,
    AdvertisingComponent,
    TeachingComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
