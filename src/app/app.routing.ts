import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { FormCreatorComponent } from './components/petitionformcreator/petitionform';
import { FormSignupComponent } from './components/signupform/signup';
import { AboutComponent } from  './components/about/about.component';
import { HomeComponent } from './components/homepage/home';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'create',
        component: FormCreatorComponent
    },
    {
        path: 'signup',
        component: FormSignupComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);