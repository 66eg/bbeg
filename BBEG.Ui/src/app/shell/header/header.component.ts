import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebook, faGithub, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() sidenav!: MatSidenav;
    faCircle = faCircle;
    faDiscord = faDiscord;
    faFacebook = faFacebook;
    faGitHub = faGithub;
    faLinkedIn = faLinkedin;
    faTwitch = faTwitch;
    faTwitter = faTwitter;

    constructor(private titleService: Title,
        private router: Router) { }

    ngOnInit() {
        // Intentionally left empty.
    }

    get title(): string {
        return this.titleService.getTitle();
    }

    openSocial(url: string) {
        window.open(url, '_blank');
    }
}