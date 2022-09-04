import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared';
import { NotFoundRoutingModule } from './notFound-routing.module';
import { NotFoundComponent } from './notFound.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        SharedModule,
        MaterialModule,
        NotFoundRoutingModule
    ],
    declarations: [
        NotFoundComponent
    ]
})
export class NotFoundModule { }