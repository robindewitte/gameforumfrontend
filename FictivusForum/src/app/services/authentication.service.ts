import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Restdata } from "../helpers/restdata";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Util } from "../helpers/util";
import { LoginDTO } from "../helpers/dto/loginDTO";
import { RegisterDTO } from "../helpers/dto/registerDTO";
import { TopicDTO } from '../helpers/dto/topicDTO';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private restData: Restdata) { }

  //methods
  private handleError(error: Response) {
    console.error(error);
    return throwError(Util.createErrorMessage(error));
  }

  //login
  public login(loginRequest: LoginDTO) {
    return (this.http.post<any>(this.restData.getUrl('api/account/login'), loginRequest,
    )).pipe(catchError(this.handleError));
  }

   //register
   public register(registerRequest: RegisterDTO) {
    return (this.http.post<any>(this.restData.getUrl('api/user/register'), registerRequest,
    )).pipe(catchError(this.handleError));
  }

  //delete when possible
  public testCQRS1(topic: TopicDTO){
    return (this.http.post<any>(this.restData.getUrl('api/write/writeMock'), topic, ).pipe(catchError(this.handleError)));
  }

  //delete when possible
  public testCQRS2(searchterm: string){
    return (this.http.get<any>(this.restData.getUrl('api/search/getPostsByTerm/'+searchterm+''))).pipe(catchError(this.handleError));
  }

  //delete when possible
  public testCQRS3(topic: TopicDTO){
    return (this.http.post<any>(this.restData.getUrl('api/search/writeMockCheck'), topic, ).pipe(catchError(this.handleError)));
  }

}
