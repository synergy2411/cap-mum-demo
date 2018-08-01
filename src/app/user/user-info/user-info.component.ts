import {
  Component, OnInit, Input,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges, 
  ViewEncapsulation
} from '@angular/core';
import { User } from '../../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class UserInfoComponent 
// implements OnInit,
//   OnChanges,
//   AfterContentChecked,
//   AfterContentInit,
//   AfterViewChecked, AfterViewInit,
//   OnDestroy 
  {
  tab : number =1;
  @Input('user') user: User;
  @Input("demo") demo: any;

  addReview(user : User, reviewForm : NgForm){
    let newReview = {
      stars : reviewForm.value.stars,
      body : reviewForm.value.body,
      author : reviewForm.value.author
    }
    user.reviews.push(newReview);
  }

  myColor = "aqua";
  myClasses = {
    'feature' : false, 
    'border' : true
  }

  // constructor() { console.log("constructor") }
  // ngDoCheck() { console.log("ngDoCheck"); }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("ngOnChanges", changes);
  // }
  // ngAfterContentChecked() { console.log("ngAfterContentChecked"); }
  // ngAfterContentInit() { console.log("ngAfterContentInit"); }
  // ngAfterViewChecked() { console.log("ngAfterViewChecked"); }
  // ngAfterViewInit() { console.log("ngAfterViewInit"); }
  // ngOnDestroy() { console.log("ngOnDestroy"); }
  // ngOnInit() { console.log("ngOnInit"); }

}
