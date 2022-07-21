import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MetadataService } from '../shell/metadata.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    faGlobe = faGlobe;
    faFacebook = faFacebook;
    faTwitter = faTwitter;
    apps: App[] = [
        {
            id: 1,
            description: 'The first gaming community feature to launch from Gamking Keep will be Game Knight! A full featured scheduling tool that will allow you to form gaming groups, organize your game library, but most importantly you can schedule game sessions and plan all logistics from the app. Yes, determin which games will be played, track their results, create tournament brackets, and even ask members to bring snacks.',
            descriptionShort: 'A digital suite of tools for organizing gaming communities.',
            facebook: 'https://www.facebook.com/gamingkeepapp/',
            logo: 'assets/gamingKeep.png',
            name: 'Gaming Keep',
            twitter: 'https://twitter.com/GamingKeep',
            website: 'http://gamingkeep.com/'
        },
        {
            id: 2,
            description: 'Create characters with complete validation using all of the official First Edition Pathfinder rules along with select third party offerings. An exhaustive and highly interlinked and searchable rules compendium and setting wiki will be available.',
            descriptionShort: 'A online tool for creating characters for the Pathfinder RPG.',
            facebook: 'https://www.facebook.com/venturecaptain',
            logo: 'assets/ventureCaptain.png',
            name: 'Venture Captain',
            twitter: 'https://twitter.com/venture_captain',
            website: 'https://venturecaptain.com/'
        },
        {
            id: 3,
            description: 'A tabletop adventure game system without classes or levels. Using a unique talent tree system to create the perfect character. Players are empowered with narrative power and dramatic action is resolved using a 6d6 system that can potentially explode on each die.',
            descriptionShort: 'A tabletop adventure game system that uses a unique 6d6 core mechanic.',
            facebook: 'tbd',
            logo: 'assets/sixShooter.png',
            name: 'SixShooter AGS',
            twitter: 'tbd',
            website: 'tbd'
        },
        {
            id: 4,
            description: 'We are the apostles of the Supreme Arbitrator, Apeirohedron, the deity of infinite faces.',
            descriptionShort: 'A religion for gamers.',
            facebook: 'https://www.facebook.com/radiantpolyhedron',
            logo: 'assets/radiantPolyhedron.png',
            name: 'Temple of the Radiant Polyhedron',
            twitter: 'https://twitter.com/RadPolyhedron',
            website: 'tbd'
        }
    ];

    constructor(private metadataService: MetadataService) { }

    ngOnInit(): void {
        this.metadataService.updateMetadata({
            title: 'Products | BBEG',
            description: 'BBEG is actively developing software and content for tabletop gamers.',
            keywords: ['Gaming Keep', 'Venture Captain', 'Six Shooter AGS', 'software'],
        });
    }

    openSocial(url: string) {
        window.open(url, '_blank');
    }
}

export interface App {
    id: number;
    description: string;
    descriptionShort: string;
    facebook: string;
    logo: string;
    name: string;
    twitter: string;
    website: string;
}