import { Component } from '@angular/core';

@Component({    
    selector : 'app-user',
    // template : `<h2>User Component Loaded!!</h2>`
    templateUrl : './user.component.html'
})
export class UserComponent{

    moreInfo(user){
        alert(`${user.firstName} is working with ${user.company}!!!` );
    }

    user = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date ("Dec 21, 1965"),
        income : 50000,
        isWorking : true,
        company : "Microsoft",
        image : "assets/images/users_images/bill.jpg",
        vote : 120
    }
}