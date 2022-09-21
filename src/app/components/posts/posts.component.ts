import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  // Variables for accordion
  panelOpenState = false;
  // Variables for pipe filter
  searchText = '';
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    // Loading data when the page loads
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
