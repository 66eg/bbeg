import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RpgAwesomeIconsModule,
        FlexLayoutModule,
        SharedModule,
        MaterialModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }