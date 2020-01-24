import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { PostsComponent} from './components/posts/posts.component';
import { NewpostComponent } from './newpost/newpost.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'posts', component: PostsComponent},
  { path: '', redirectTo:"/posts", pathMatch:"full"},
  { path: 'newpost', component: NewpostComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
