import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {
  private REST_API_SERVER = 'https://localhost:44332/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };
  
  constructor(private httpClient: HttpClient) { }

  public get(url: any){
    return this.httpClient
      .get<any>(`${this.REST_API_SERVER + url}`, this.httpOptions);
  }

  public post(url: any, body: any){
    return this.httpClient
      .post<any>(`${this.REST_API_SERVER + url}`, body, this.httpOptions);
  }

  public put(url: any, body: any){
    return this.httpClient
      .put<any>(`${this.REST_API_SERVER + url}`, body, this.httpOptions);
  }

  public delete(url: any){
    return this.httpClient
      .delete<any>(`${this.REST_API_SERVER + url}`, this.httpOptions);
  }
}
