import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from './services/settings/settings.service';
declare var $: any;

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    private _router: Subscription;

    constructor(private router: Router, @Inject(DOCUMENT) private document: any, public setting: SettingsService) { }

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
        });
    }
}
