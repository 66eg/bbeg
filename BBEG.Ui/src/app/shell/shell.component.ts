import { Component, OnInit, ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';
import { faDiscord, faFacebook, faGithub, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { UntilDestroy, untilDestroyed } from '@shared';

@UntilDestroy()
@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
    @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
    faDiscord = faDiscord;
    faFacebook = faFacebook;
    faGitHub = faGithub;
    faLinkedIn = faLinkedin;
    faTwitch = faTwitch;
    faTwitter = faTwitter;

    constructor(private breakpoint: BreakpointObserver) { }

    ngOnInit() {
        // Automatically close side menu on screens > small breakpoint.
        this.breakpoint
            .observe([Breakpoints.Small, Breakpoints.XSmall])
            .pipe(
                filter(({ matches }) => !matches),
                untilDestroyed(this)
            )
            .subscribe(() => {
                if (this.sidenav) this.sidenav.close();
            });
    }

    openSocial(url: string) {
        window.open(url, '_blank');
    }
}