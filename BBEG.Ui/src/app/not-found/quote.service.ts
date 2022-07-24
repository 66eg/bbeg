import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QuoteService {
    constructor(private httpClient: HttpClient) { }

    getRandomQuote(): Observable<any> {
        return this.httpClient
            .get(`https://api.magicthegathering.io/v1/cards?random=true&pageSize=1&contains=imageUrl`)
            .pipe(
                map((body: any) => body),
                catchError(() => of('Error, could not load the MAGIC :-('))
            );
    }
}