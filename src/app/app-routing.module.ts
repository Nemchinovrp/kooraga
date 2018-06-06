import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }   from './contact/contact.component';
import { ScheduleComponent }   from './schedule/schedule.component';
import { ThanksComponent }   from './thanks/thanks.component';
import { FotoComponent }   from './foto/foto.component';
import { VideoComponent }   from './video/video.component';

const routes: Routes = [
  { path: '', redirectTo: '/schedule', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'thanks', component: ThanksComponent},
  { path: 'foto', component: FotoComponent},
  { path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}