import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { HttpClient } from '@angular/common/http'

export class imageservice {
  private endpoint = 'https://api.unsplash.com';
  private apiClientId: String;
  constructor(private http:HttpClient){
    this.getApiKey();
   }
   getApiKey() {
    this.http.get('./photos.json')
      .subscribe((response: any) => this.apiClientId = response.key);
  }
 
  getPhotos(keyword: string) {
    return this.http.get(`${this.endpoint}/photos/search?client_id=${this.apiClientId}&query=${keyword}`);
}

}
