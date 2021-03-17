import { ActionReducerMap } from "@ngrx/store";
import { Post } from "../post-model";
import * as TestingActions from './testing.actions'

export interface State {
    posts: Post[]
}

const initialState: State = {
    posts: []
}

export function testingReducer(
    state = initialState,
    action: TestingActions.TestingActions
) {
    switch (action.type) {
        case TestingActions.ADD_POSTS: 
        return {
            ...state,
            posts: [...state.posts, action.payload]
        }
        case TestingActions.SET_POSTS:
            return{
                ...state,
                posts: [...action.payload]
            }
        default: 
            return state;
    }
}

export interface AppState {
    posts: State
}

//the  golbal appState (is always required)
export const appReducer: ActionReducerMap<AppState> = {
    posts: testingReducer
}
