import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { QuicklinkModule } from 'ngx-quicklink';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { environment } from '@env/environment';
import { RouteReusableStrategy, ApiPrefixInterceptor, ErrorHandlerInterceptor, SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { MetadataService } from './shell/metadata.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
        FormsModule,
        HttpClientModule,
        RouterModule,
        QuicklinkModule,
        TranslateModule.forRoot(),
        MaterialModule,
        SharedModule,
        ShellModule,
        HomeModule,
        AppRoutingModule,
        FontAwesomeModule // Must be imported as the last module as it contains the fallback route.
    ],
    declarations: [AppComponent],
    providers: [
        MetadataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPrefixInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: RouteReuseStrategy,
            useClass: RouteReusableStrategy
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }