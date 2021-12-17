import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Restdata } from "../helpers/restdata";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Util } from "../helpers/util";
import { TopicDTO } from '../helpers/dto/topicDTO';
import { ResponseDTO } from '../helpers/dto/responseDTO';


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
export class Writeservice {

  constructor(private http: HttpClient, private router: Router, private restData: Restdata) { }

  private handleError(error: Response) {
    console.error(error);
    return throwError(Util.createErrorMessage(error));
  }

  public PostTopic(topicDTO: TopicDTO) {
    return (this.http.post<any>(this.restData.getUrl('api/write/postTopic'), topicDTO,
    )).pipe(catchError(this.handleError));
  }
  public PostResponse(responseDTO: ResponseDTO) {
    return (this.http.post<any>(this.restData.getUrl('api/write/postResponse'), responseDTO,
    )).pipe(catchError(this.handleError));
  }
}
