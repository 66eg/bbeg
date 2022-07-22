import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() sidenav!: MatSidenav;
    faCircle = faCircle;

    constructor(private titleService: Title,
                private router: Router) { }

    ngOnInit() {
        // Intentionally left empty.
    }

    get title(): string {
        return this.titleService.getTitle();
    }
}