import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
})

export class AboutComponent  { 
    devs: any;

    constructor() {
        this.devs = [
            {
                name: 'Eddie',
                phone: '305-555-1111',
                email: 'name1@email1.com'
            },
            {
                name: 'Yaumel',
                phone: '305-555-2222',
                email: 'name2@email.com'
            },
            {
                name: 'The other guy',
                phone: '305-555-3333',
                email: 'name3@email.com'
            },           
        ]
    }
}
