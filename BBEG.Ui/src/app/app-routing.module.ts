import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
    Shell.childRoutes([
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'about/team', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
        { path: 'notFound', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
    ]),
    // Fallback when no prior route is matched.
    { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
    imports: [
        QuicklinkModule,
        RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy, initialNavigation: 'enabledBlocking' })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }