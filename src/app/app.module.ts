import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TestingEffects } from './store/testing.effects';
import * as fromApp from './store/testing.reducers';
import { PostDisplayContentComponent } from './post-display-content/post-display-content.component';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    PostDisplayContentComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forRoot([TestingEffects]), 
    StoreModule.forRoot(fromApp.appReducer),
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
