import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-hashcrackutils',
    templateUrl: './hashcrackutils.component.html',
    styleUrls: ['./hashcrackutils.component.css']
})
export class hashcrackutilsComponent implements OnInit {
    constructor(private API: ApiService) { }

    apiResponse = 'Press the button above to get the version.';

    doAPIAction(): void {
        this.API.APIGet('/api/status', (response) => {
            this.apiResponse = response.versionString;
        })
    }

    ngOnInit() {
    }
}
