import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
  ]),
  // Fallback when no prior route is matched.
  { path: '**', redirectTo: '', pathMatch: 'full' }
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
