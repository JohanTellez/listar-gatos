import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  //readonly URL_API_CATS = "https://api.thecatapi.com/v1/breeds?limit=10&page=0";

  constructor(
    private http: HttpClient,
  ) { }

  getCats(){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.get("https://api.thecatapi.com/v1/breeds?limit=30&page=0", httpOptions);
  }

  detailCat(){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.get("https://api.thecatapi.com/v1/breeds/:breed_id", httpOptions);
  }
}
