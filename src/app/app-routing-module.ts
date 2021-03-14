import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/app', pathMatch: 'full'},
    {path: 'app', component: AppComponent, children: [
        {path:'post-list', component: PostListComponent}
    ]}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}