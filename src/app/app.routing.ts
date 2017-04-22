import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { FormCreatorComponent } from './components/petitionformcreator/petitionform';
import { AboutComponent } from  './components/about/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FormCreatorComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);