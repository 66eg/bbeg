import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AboutComponent } from './about.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts.
    { path: '', component: AboutComponent, data: { title: marker('About') } },
    { path: 'team', component: TeamComponent, data: { title: marker('Team') } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AboutRoutingModule { }