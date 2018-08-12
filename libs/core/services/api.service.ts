import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  API_ID = '4031b80b';
  APP_KEY = '121fe20bd1b2fb58cacedb2ab2f5b2f1';
  food;
  uri;

  constructor(private http: HttpClient) {}

  searchRecipes(food) {
    const url = `https://api.edamam.com/search?q=${food}&app_id=${
      this.API_ID
    }&app_key=${this.APP_KEY}`;
    const params = '';
    return this.http.get(url);
  }
}
