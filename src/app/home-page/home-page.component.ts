import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTesting from '../store/testing.reducers'
import * as TestingActions from '../store/testing.actions'
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../post-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  testFormGroup: FormGroup 
  posts: Post[];
  subscription: Subscription

  constructor(private store: Store<fromTesting.AppState>
            ) {}

// sumbimt a post to the backend
  onSubmit() {
    this.store.dispatch(new TestingActions.AddPosts(this.testFormGroup.value))
  }

  //Fetch Posts from the backend
  onFetchPosts(){
    this.store.dispatch(new TestingActions.FetchPosts())
  }

  ngOnInit() {
    this.initForm()

   
  }
  // initalising the post request made to the backend
  private initForm() {
    let said_by = ''
    let quote_text = ''
    let quote_id = ''

    this.testFormGroup = new FormGroup({
      'said_by': new FormControl(said_by),
      'quote_text': new FormControl(quote_text),
      'quote_id': new FormControl(quote_id)
    })
    }

}
