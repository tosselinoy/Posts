import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private router: Router) {}

  // Loaded data from 'json placegolder'
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
