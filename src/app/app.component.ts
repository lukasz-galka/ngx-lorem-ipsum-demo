import { Component } from '@angular/core';

import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    count: number = 5;
    paragraphsCount: number = 0;
    text: string = '';

    randomMin: number = 10;
    randomMax: number = 20;
    randomParagraphsCount: number = 3;
    randomText: string = '';

    constructor(private service: NgxLoremIpsumService) {}
}
