import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FotoComponent } from './foto/foto.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ScheduleComponent,
    ThanksComponent,
    FotoComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
