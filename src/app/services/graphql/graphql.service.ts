import { Injectable } from '@angular/core';
import { Headers, RequestOptions,Http } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  private headers;
  private options;

  constructor(private http: Http) { }

  setHeader(){
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers, withCredentials: true });
  }

  execute(graphql): Observable<any> {
    this.setHeader();
    console.log(`${environment.graphqlUri}/api/services`);
    
    return this.http.post(`${environment.graphqlUri}/api/services`,JSON.stringify(graphql),this.options)
      .pipe(map(res => res.json()));
  }

}
