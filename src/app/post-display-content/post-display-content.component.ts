import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Posts.model';

@Component({
  selector: 'app-post-display-content',
  templateUrl: './post-display-content.component.html',
  styleUrls: ['./post-display-content.component.css']
})
export class PostDisplayContentComponent implements OnInit {
@Input() post: Post
@Input() index: number

  constructor() { }

  ngOnInit(): void {
  }

}
