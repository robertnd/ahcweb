import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

const SEARCH_API = 'http://localhost:8091/api/codes/';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getCodeDetails(request: any): Observable<any> {
    
    let codeRef = request.codeRef
    let rUrl = SEARCH_API + `${codeRef}`
    console.log(rUrl)
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(rUrl, httpOptions)
  }
}
