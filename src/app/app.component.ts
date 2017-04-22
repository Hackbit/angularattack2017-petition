import { Component } from '@angular/core';
import { NavigationComponent } from  './components/navigation/navi.component';
import { FormCreatorComponent } from './components/petitionformcreator/petitionform';
import { FormSignupComponent } from './components/signupform/signup';
import { PetitionBackgroundComponent } from './components/petitionbackgroundlist/petitionbackground';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  { }
