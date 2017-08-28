import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AspireComponent } from './aspire/aspire.component';
import { CaresComponent } from './cares/cares.component';
import { CareersComponent } from './careers/careers.component';
import { MotivateComponent } from './motivate/motivate.component';
import { DigeratiComponent } from './digerati/digerati.component';

import { WorkplaceComponent } from '../../workplace.component';
const routes: Routes = [
    // { path: 'title', component: TitleComponent,
    //         resolve: {titles: TitlesResolverService} },
    // // use a service that is define in the provider
    // { path: 'title/:id', component: TitleDetailsComponent,
    //         canActivate: [RouteActivatorService]}
    { 
        path : 'workplace' , component:WorkplaceComponent ,
        children : [
            { path:'aspire', component: AspireComponent },
            { path:'cares', component: CaresComponent },
            { path:'careers', component: CareersComponent },
            { path:'motivate', component: MotivateComponent },
            { path:'digerati', component: DigeratiComponent },
        ]
    }
    
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class ProgramsRouting {
}

