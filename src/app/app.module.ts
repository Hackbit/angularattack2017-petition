import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavigationComponent } from  './components/navigation/navi.component';
import { AboutComponent } from  './components/about/about.component';
import { FormCreatorComponent } from './components/petitionformcreator/petitionform';
import { PetitionBackgroundComponent } from './components/petitionbackgroundlist/petitionbackground';

import {routing} from './app.routing'

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, NavigationComponent, FormCreatorComponent, PetitionBackgroundComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
