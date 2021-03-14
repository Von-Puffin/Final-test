import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Post } from '../Posts.model';
import { Store } from '@ngrx/store';
import * as fromTesting from '../store/testing.reducers'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  subscription: Subscription
  
  constructor(private store: Store<fromTesting.AppState>,
    private router: Router,
    private route: ActivatedRoute) {}
    

    //This bit links to the fetch post button so that what is fetched is displayed onscreen
  ngOnInit(): void {
    this.subscription = this.store.select('posts')
    .pipe(map(postState => postState.posts))
    .subscribe(
      (posts: Post[]) => {
        this.posts = posts
      }
      )
  }

}
