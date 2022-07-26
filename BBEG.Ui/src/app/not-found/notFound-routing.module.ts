import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { NotFoundComponent } from './notFound.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts.
    { path: '', component: NotFoundComponent, data: { title: marker('404 - Not Found') } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class NotFoundRoutingModule { }