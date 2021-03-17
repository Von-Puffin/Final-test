import { Action } from "@ngrx/store";
import { Post } from "../post-model";

export const ADD_POSTS = '[Test] Add Posts'  
export const FETCH_POSTS = '[Test] Fetch Posts'
export const SET_POSTS = '[Test] Set Posts'


export class FetchPosts implements Action {
    readonly type = FETCH_POSTS
}

export class AddPosts implements Action {
    readonly type = ADD_POSTS
    constructor(public payload: Post){}
}
export class SetPosts implements Action {
    readonly type = SET_POSTS

    constructor(public payload: Post[]){}
}

export type TestingActions =  
                            | FetchPosts 
                            | AddPosts
                            | SetPosts