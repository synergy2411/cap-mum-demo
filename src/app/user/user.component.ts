import { Component } from '@angular/core';
import { USER_DATA } from '../data/mock';

@Component({    
    selector : 'app-user',
    // template : `<h2>User Component Loaded!!</h2>`
    templateUrl : './user.component.html'
})
export class UserComponent{

    moreInfo(user){
        alert(`${user.firstName} is working with ${user.company}!!!` );
    }

    demo = "CurrentValue";
    user : any;

    constructor(){}
    ngOnInit(){
        this.user = USER_DATA;
    }

}