import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import { QuoteService } from './quote.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    isLoading = false;
    quote: any = [];
    version: string | null = environment.version;

    constructor(private quoteService: QuoteService) { }

    ngOnInit() {
        this.isLoading = true;
        this.quoteService.getRandomQuote()
            .pipe(finalize(() => { this.isLoading = false; }))
            .subscribe((quote: any) => {
                this.quote = quote.cards[0];
            });
    }
}