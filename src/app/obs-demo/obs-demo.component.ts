import { Component, OnInit } from '@angular/core';
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {
  packages : any;
    data = Observable.create((observer)=>{
      setTimeout(()=>{
        observer.next("First Package");
      }, 1000);
      setTimeout(()=>{
        observer.next("Second Package");
      }, 2000);
      setTimeout(()=>{
        observer.next("Third Package");
      }, 4000);
      setTimeout(()=>{
        observer.complete();
      }, 5000);
      setTimeout(()=>{
        observer.next("Fourth Package");
      }, 6000);
    }).subscribe(
      packages=>this.packages = packages,
      err => console.log("ERROR", err),
      () => console.log("COMPLETED!")
    )


    // Observable.create(function(observer){
    //   serTimeout(function(){
    //     observer.next("First Package!")
    //   }, 1000)
    // })

  constructor() {
    
   }

  ngOnInit() {
  }

}
