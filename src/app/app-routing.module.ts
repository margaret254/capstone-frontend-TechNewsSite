import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { PostsComponent} from './components/posts/posts.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'posts', component: PostsComponent},
  { path: '', redirectTo:"/posts", pathMatch:"full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
