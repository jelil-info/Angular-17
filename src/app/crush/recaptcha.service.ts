import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor(
    private http: HttpClient
  ) { }

 sendToken(token){
    return this.http.post<any>("/submit", {recaptcha: token})
  }
    
  
  }



