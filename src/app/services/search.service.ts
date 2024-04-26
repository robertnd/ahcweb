import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

const SEARCH_API = 'http://localhost:8091/api/codes/search/';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(request: any): Observable<any> {
    
    let tags = request.tags.trim().replace(' ', '+')
    
    let rUrl = SEARCH_API + `${tags}`
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(rUrl, httpOptions)
  }
}
