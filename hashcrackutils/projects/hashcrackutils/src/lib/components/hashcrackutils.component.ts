import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-hashcrackutils',
    templateUrl: './hashcrackutils.component.html',
    styleUrls: ['./hashcrackutils.component.css']
})
export class hashcrackutilsComponent implements OnInit {
    constructor(private API: ApiService) { } 
 
    userInput = '';
    apiResponse = 'Press the button above to get the response.'; 
 
    doAPIAction(): void { 
        this.API.request({ 
            module: 'hashcrackutils', 
            action: 'hello_world', 
            user_input: this.userInput
        }, (response) => { 
            this.apiResponse = response; 
        }) 
    } 
 
    ngOnInit() { 
    } 
}
