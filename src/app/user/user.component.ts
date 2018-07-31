import { Component, ViewEncapsulation } from '@angular/core';
import { USER_DATA } from '../data/mock';
import { User } from '../model/user';

@Component({    
    selector : 'app-user',
    // template : `<h2>User Component Loaded!!</h2>`
    templateUrl : './user.component.html',
    styles : [``],
  
})
export class UserComponent{
    demo = "CurrentValue";
    users : User[];

    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!!!` );
    }

    constructor(){}
    ngOnInit(){
        this.users = USER_DATA;
    }

}