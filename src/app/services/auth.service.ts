import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token : any = null;

  register(username, password){
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then(response=>console.log(response))
      .catch(err=>console.log(err))
  }

  login(username, password){
   return firebase.auth().signInWithEmailAndPassword(username,password);
      // .then(response=>{
       
      //   firebase.auth().currentUser.getIdToken()
      //     .then(token => {
      //       this.token = token;
      //       console.log(token);
      //       this.router.navigate(['/obs']);
      //     })
      //   console.log(response);
      // })
      // .catch(err=>console.log(err))
  }
  constructor(private router : Router) { }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }
  
}
