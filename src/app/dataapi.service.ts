import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http: HttpClient
  ) { }

  registerUser(data:any){
    return this.http.post('https://127.0.0.1/app-authen-api-main/app-authen-api-main/register.php', data);
  }
  login(datalog:any){
    return this.http.post('https://127.0.0.1/app-authen-api-main2/app-authen-api-main/login.php', datalog);
  }
}
