import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    isLoading = false;
    quote: any = [];
    version: string | null = environment.version;

    constructor() {
        // Intentionally left empty.
    }

    ngOnInit() {
        // Intentionally left empty.
    }
}