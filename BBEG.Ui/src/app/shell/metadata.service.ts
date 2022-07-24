import { Inject, Injectable, Optional } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HOST_URL } from '../host-url';

export interface PageMetadata {
    title: string;
    image: string;
    imageAlt: string;
    imageHeight: string;
    imageType: string;
    imageWidth: string;
    description: string;
    author: string;
    keywords: string[];
    type: string;
}

const defaultMetadata: PageMetadata = {
    title: 'BBEG',
    image: 'bbeg-logo@384.png',
    imageAlt: 'BBEG company logo',
    imageHeight: '384',
    imageType: 'image/png',
    imageWidth: '384',
    description: 'A tech startup dedicated to software research &amp; development for tabletop gaming.',
    author: 'Michael Brewer',
    keywords: ['games', 'software', 'tabletop', 'gaming', 'boardgame', 'card game', 'board game'],
    type: 'website'
}

@Injectable()
export class MetadataService {
    hostUrl: string | undefined;

    constructor(private metaTagService: Meta,
        private titleService: Title,
        private router: Router,
        @Optional() @Inject(HOST_URL) private ssrHostUrl: string) {
        if (ssrHostUrl) {
            this.hostUrl = ssrHostUrl;
        }
        else {
            this.hostUrl = window.location.protocol + '//' + window.location.hostname;
        }
    }

    public updateMetadata(metadata: Partial<PageMetadata>, index: boolean = true): void {
        const pageMetadata: PageMetadata = { ...defaultMetadata, ...metadata };
        const metatags: MetaDefinition[] = this.generateMetaDefinitions(pageMetadata);

        metatags.forEach((currentValue) => {
            if (currentValue.name) {
                this.metaTagService.removeTag(`name="${currentValue.name}"`);
            }
            else if (currentValue.property) {
                this.metaTagService.removeTag(`property="${currentValue.property}"`);
            }
        });

        this.metaTagService.removeTag('property = "og:url"'); 
        this.metaTagService.removeTag('name = "robots"');
        this.metaTagService.removeTag('httpEquiv = "Content-Type"');
        this.metaTagService.addTags([
            ...metatags,
            { property: 'og:url', content: `${this.hostUrl}${this.router.url}` },
            { name: 'robots', content: index ? 'index, follow' : 'noindex' },
            { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }
        ]);
        this.titleService.setTitle(pageMetadata.title);
    }

    private generateMetaDefinitions(metadata: PageMetadata): MetaDefinition[] {
        return [
            { name: 'title', content: metadata.title },
            { property: 'og:title', content: metadata.title },
            { property: 'og:image', content: this.hostUrl + '/assets/' + metadata.image },
            { property: 'og:image:alt', content: metadata.imageAlt },
            { property: 'og:image:height', content: metadata.imageHeight },
            { property: 'og:image:secure_url', content: this.hostUrl + '/assets/' + metadata.image },
            { property: 'og:image:type', content: metadata.imageType },
            { property: 'og:image:width', content: metadata.imageWidth },
            { name: 'description', content: metadata.description },
            { property: 'og:description', content: metadata.description },
            { name: 'author', content: metadata.author },
            { property: 'og:author', content: metadata.author },
            { name: 'keywords', content: metadata.keywords.join(', ') },
            { property: 'og:type', content: metadata.type }
        ];
    }
}