import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { GenerateHeaderService } from "../generate-header.service";
import { Post } from "../post-model";

import * as TestingActions from './testing.actions'
import * as fromTesting from './testing.reducers'

@Injectable()
export class TestingEffects {
    // Submit a post to the backend
    // @Effect({dispatch: false})
    // storePosts = this.actions$.pipe(ofType(TestingActions.ADD_POSTS),
    // withLatestFrom(this.store.select('posts')),
    //     switchMap(([actionData, postState]) => {
    //         return this.http.put(
    //             'https://project-hassa-default-rtdb.firebaseio.com/posts.json',
    //             postState.posts
    //         )
    //     })
    // );
    //Fetch post from backend
    @Effect()
        fetchPosts = this.actions$.pipe(
            ofType(TestingActions.FETCH_POSTS), switchMap(() => {
                return this.http
                .get<Post[]>(
                    'http://192.168.1.26:8080/api/model/1', {
                        headers: GenerateHeaderService.getStandardApiCallHeader()
                    }
                )
            }),
            map(posts => {
                return posts.map(post => {
                    console.log(typeof post);
                    console.log(post);
                    return {
                        ...post
                    }
                })
            }),
            map(posts => {
                return new TestingActions.SetPosts(posts);
            })
        )

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromTesting.AppState>) {}
}