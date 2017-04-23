import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'form-creator-component',
  templateUrl: `petitionform.html`,
})
export class FormCreatorComponent  { 
  firstName: string;
  lastName: string;
  petitionTitle: string;
  petitionBody: string;

  constructor() {
    
  }

  // clearPlaceHolder(){
  //   document.querySelectorAll("input[type='text']").getAttribute();
  // }
}