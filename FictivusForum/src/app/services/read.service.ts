import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Restdata } from "../helpers/restdata";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Util } from "../helpers/util";


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
export class Readservice{
//CONTROLEER DE URLS
  constructor(private http: HttpClient, private router: Router, private restData: Restdata) { }

  private handleError(error: Response) {
    console.error(error);
    return throwError(Util.createErrorMessage(error));
  }

  public GetPostsFromUser(user: string){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetPostsByUsername/'+user+''))).pipe(catchError(this.handleError));
  }

  public GetPostsFromTopic(topicTitle: string){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetPostsFromTopic/'+topicTitle+''))).pipe(catchError(this.handleError));
  }

  public GetPostsBySearchterm(term: string){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetPostsBySearchTerm/'+term+''))).pipe(catchError(this.handleError));
  }

  public GetAllMemeTopics(){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetMemeTopics'))).pipe(catchError(this.handleError));
  }
  public GetMemePostsBySearchterm(term: string){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetMemePostsBySearchTerm/'+term+''))).pipe(catchError(this.handleError));
  }

  public GetAllModReleaseTopics(){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetModReleaseTopics'))).pipe(catchError(this.handleError));
  }
  public GetModReleasePostsBySearchterm(term: string){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetModReleasePostsBySearchTerm/'+term+''))).pipe(catchError(this.handleError));
  }
  public GetAllDiscussionTopics(){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetDiscussion'))).pipe(catchError(this.handleError));
  }
  public GetDiscussionPostsBySearchterm(term: string){
    return (this.http.get<any>(this.restData.getUrl('api/search/GetDiscussionPostsBySearchTerm/'+term+''))).pipe(catchError(this.handleError));
  }
}
