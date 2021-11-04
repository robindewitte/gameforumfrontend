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
export class WriteserviceService {

  constructor(private http: HttpClient, private router: Router, private restData: Restdata) { }
}
