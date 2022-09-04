import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
    Shell.childRoutes([
        { path: '', component: HomeComponent, data: { title: 'Home' } },
        { path: 'home', component: HomeComponent, data: { title: 'Home' } }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }