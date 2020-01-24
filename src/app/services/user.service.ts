import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  registerNewUser(userData){
    return this.http.post('http://127.0.0.1:8000/users/',userData);
  }

  getPosts() {
    return this.http.get('http://127.0.0.1:8000/news/');
  }
  newPost(post) {
    console.log(post)
    return this.http.post('http://127.0.0.1:8000/news/', post)
  }
}
