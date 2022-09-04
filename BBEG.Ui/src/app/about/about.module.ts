import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TeamComponent } from './team/team.component';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        RpgAwesomeIconsModule,
        FlexLayoutModule,
        SharedModule,
        MaterialModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent,
        TeamComponent
    ]
})
export class AboutModule { }