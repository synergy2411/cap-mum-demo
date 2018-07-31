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

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class UserInfoComponent implements OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  OnDestroy {

  @Input('user') user: User;
  @Input("demo") demo: any;

  myClasses = {
    'feature' : false, 
    'border' : true
  }

  constructor() { console.log("constructor") }
  ngDoCheck() { console.log("ngDoCheck"); }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes);
  }
  ngAfterContentChecked() { console.log("ngAfterContentChecked"); }
  ngAfterContentInit() { console.log("ngAfterContentInit"); }
  ngAfterViewChecked() { console.log("ngAfterViewChecked"); }
  ngAfterViewInit() { console.log("ngAfterViewInit"); }
  ngOnDestroy() { console.log("ngOnDestroy"); }
  ngOnInit() { console.log("ngOnInit"); }

}
