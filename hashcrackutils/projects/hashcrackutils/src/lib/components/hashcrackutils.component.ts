import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-hashcrackutils',
    templateUrl: './hashcrackutils.component.html',
    styleUrls: ['./hashcrackutils.component.css']
})
export class hashcrackutilsComponent implements OnInit {
    constructor(private API: ApiService) { }

    ngOnInit() {
    }
}
