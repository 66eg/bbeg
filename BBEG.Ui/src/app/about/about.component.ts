import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { MetadataService } from '../shell/metadata.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    isLoading = false;
    quote: any = [];
    version: string | null = environment.version;

    constructor(private metadataService: MetadataService) { }

    ngOnInit() {
        this.metadataService.updateMetadata({
            title: 'About | BBEG',
            description: 'BBEG company values, vision, and mission statement.',
            keywords: ['values', 'vision', 'mission'],
        });
    }
}