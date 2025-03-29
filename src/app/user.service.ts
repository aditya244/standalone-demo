import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import from '../../assets/users.json';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //private readonly usersUrl = '../../assets/users.json'; // URL to the JSON file
  private readonly usersUrl = 'https://jsonplaceholder.typicode.com/posts'; // Correct URL to the JSON file

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }
}
