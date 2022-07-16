import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts.
    { path: '', component: ProductsComponent, data: { title: marker('Products') } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ProductsRoutingModule { }