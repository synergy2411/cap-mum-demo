import {
  Component, OnInit, Input,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  OnDestroy {

  @Input('user') user: any;
  @Input("demo") demo: any;

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
