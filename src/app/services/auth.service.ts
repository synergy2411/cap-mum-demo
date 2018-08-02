import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token : any = "";

  register(username, password){
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then(response=>console.log(response))
      .catch(err=>console.log(err))
  }

  login(username, password){
    firebase.auth().signInWithEmailAndPassword(username,password)
      .then(response=>{
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
            console.log(token);
          })
        console.log(response);
      })
      .catch(err=>console.log(err))
  }
  constructor() { }

  getToken(){
    return this.token;
  }

}
