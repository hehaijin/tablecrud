import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAcode()
  {
    return this.httpClient.get('http://localhost:8080/admin.Acode');
  }
}
