import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalScreenComponent } from './components/final-screen/final-screen.component';
import { SplashComponent } from './components/splash/splash.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'onboard', component: WelcomeComponent },
  // { path: 'room', component: AvatarComponent },
  { path: 'finish', component: FinalScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
