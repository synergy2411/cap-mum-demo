import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBvq6dp6VUyl_NnPm7YLVPTSjXTrdFxGFo",
      authDomain: "cap-mum-demo.firebaseapp.com"
    });
  }
}
