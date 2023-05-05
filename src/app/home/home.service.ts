import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  shorten(data:any): Observable<any> {
        console.log(data);
        const url = "http://localhost:8080/shortUrl";
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
    
      const body = {
        'longurl' : data.longurl
      };
      return this.http.post(url, body, { headers: headers });
    
      }   
      
  redirect(data:any): Observable<any> {
        console.log("data><><><<",data);
        const url = "http://localhost:8080/redirect";
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
    
      const body = {
        'shortUrl' : data
      };
      // console.log("shorturl>>>>>>>>>>",body.shortUrl)
      return this.http.post(url, body, { headers: headers });
    
      }   
}








