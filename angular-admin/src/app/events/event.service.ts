import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // TODO: Config environment variables
  host = 'http://localhost:8080';
  url = this.host + '/api/events';

  constructor(private http: HttpClient) { }
  
  get() {
    return this.http.get(this.url);
  }
  
  getById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  
  update(data) {
    return this.http.put(`${this.url}/${data._id}`, data);
  }
  
  add(data) {
    return this.http.post(this.url, data);
  }
  
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
