import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  template: `
    <div *ngFor="let post of posts" [appHighlight]="post.id % 2 === 0">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | truncateText : 100 }}</p>
    </div>
  `,
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private readonly postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data: any[]) => {
      this.posts = data.slice(0, 30); // Limit to 30 posts
    });
  }
}
