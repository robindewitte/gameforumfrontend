import {HttpHeaders} from "@angular/common/http";

export class Restdata {

//voor nu nog even localhost
//  private url = 'http://localhost:5001/';
private url = 'gateway.default.svc.cluster.local:5001/'


  public httpOptionsToken = { 
        headers: new HttpHeaders().set('Authorization', 'Bearer ' +sessionStorage.getItem("token")).set('Content-Type', 'application/json') 
        };
        
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +sessionStorage.getItem("token"),
      'Access-Control-Allow-Origin': 'gateway.default.svc.cluster.local:5001/',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  public getUrl(keyword: string): string {
    return this.url + keyword + '/';
  }

}
