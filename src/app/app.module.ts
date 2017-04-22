import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormCreatorComponent } from './components/petitionformcreator/petitionform'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FormCreatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
