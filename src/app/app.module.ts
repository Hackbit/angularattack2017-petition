import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormCreatorComponent } from './components/petitionformcreator/petitionform';
import { PetitionBackgroundComponent } from './components/petitionbackgroundlist/petitionbackground';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FormCreatorComponent, PetitionBackgroundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
