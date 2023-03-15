import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { MaxvalueDirective } from './directives/maxvalue.directive';
import { NumberInputDirective } from './directives/number-input.directive';
import { FinalScreenComponent } from './components/final-screen/final-screen.component';
import { AlphabetsOnlyDirective } from './directives/alphabets-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    WelcomeComponent,
    MaxvalueDirective,
    NumberInputDirective,
    FinalScreenComponent,
    AlphabetsOnlyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
