import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavigationComponent } from  './components/navigation/navi.component';
import { AboutComponent } from  './components/about/about.component';
import { FormCreatorComponent } from './components/petitionformcreator/petitionform';
import { FormSignupComponent } from './components/signupform/signup';
import { PetitionBackgroundComponent } from './components/petitionbackgroundlist/petitionbackground';
import { HomeExampleComponent } from './components/homepageexample/homeexample';
import { HomeComponent } from './components/homepage/home';


import {routing} from './app.routing'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, NavigationComponent, FormCreatorComponent, FormSignupComponent, PetitionBackgroundComponent, AboutComponent, HomeExampleComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
