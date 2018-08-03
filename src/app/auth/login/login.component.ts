import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(f : NgForm){
    console.log("Username : " + f.value.username + 
            "\nPassword : " + f.value.password);
    this.authService.login(f.value.username, f.value.password)
      .then((response)=>{
        firebase.auth().currentUser.getIdToken()
          .then((token)=>{
            this.authService.token = token;
            this.router.navigate(['/obs']);
          })
      });
    //console.log("-- FORM --", f);
  }

  getApiData(){
    this.dataService.getApiData();
    this.dataService.getHttpClientApiData();
  }
  constructor(private authService : AuthService,
          private dataService : DataService,
          private router : Router) { }

  ngOnInit() {
  }

}
