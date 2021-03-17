import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeStartComponent } from "./home-start/home-start.component";
import { PostDisplayContentComponent } from "./post-display-content/post-display-content.component";
import { PostListComponent } from "./post-list/post-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/app', pathMatch: 'full'},
    {path: 'app', component: HomePageComponent, children: [
        {path: '', component: HomeStartComponent},
        {path:'post-list', component: PostListComponent},
        {path:':id', component: PostDisplayContentComponent}

    ]}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}