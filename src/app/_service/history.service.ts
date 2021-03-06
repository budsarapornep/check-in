import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(`http://192.168.0.105:9879/v1/users/get-all-history`);
  }

  getAllHistroyGuest(){
    return this.http.get<any>(`http://192.168.0.105:9879/v1/users/get-all-guest-hist`);
  }
}
