import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPosts().subscribe(
      posts => {
        this.posts = posts;
      });
  }

}
