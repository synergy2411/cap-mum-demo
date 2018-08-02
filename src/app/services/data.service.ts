import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mock';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
    counter: number = 0;
    getUserData() {
        return USER_DATA;
    }
    getJsonData() {
        return this.http.get("assets/data/user-data.json")
            .map((response,param1) => <User[]>response.json().userdata)
        // .subscribe(users => console.log(users));
    }
    getApiData(){
        this.http.get("https://cap-mum-demo.firebaseio.com/userdata.json?auth="+this.authService.getToken())
            .map((response) => <User[]>response.json())
            .subscribe(response=>console.log("API Response : ",response));
    }
    getHttpClientApiData(){
        this.httpClient.get<User[]>("https://cap-mum-demo.firebaseio.com/userdata.json",{
            params : new HttpParams().set("auth", this.authService.getToken())
        }).subscribe(users => console.log("getHttpClientApiData : ", users));
    }
    constructor(private http: Http,
                private httpClient :HttpClient,
                private authService : AuthService) { }
}

// return this.http.get("assets/data/user-data.json")
// .map(function (response, param1){
    // return <User[]>response.json().userdata;
//})