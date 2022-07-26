import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';
import { rpgAwesomeIconAnvil, rpgAwesomeIconBleedingEye, rpgAwesomeIconCrystals } from '@triangular/rpg-awesome-icons/icons';
import { MetadataService } from '../shell/metadata.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    version: string | null = environment.version;

    constructor(private metadataService: MetadataService,
        private registry: RpgAwesomeIconsRegistry) {
        registry.registerIcons([
            rpgAwesomeIconAnvil,
            rpgAwesomeIconBleedingEye,
            rpgAwesomeIconCrystals
        ]);
    }

    ngOnInit() {
        this.metadataService.updateMetadata({
            title: 'About | BBEG',
            description: 'BBEG company values, vision, and mission statement.',
            keywords: ['values', 'vision', 'mission', 'diversity', 'gaming'],
        });
    }
}