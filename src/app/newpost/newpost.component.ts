import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']

})
export class NewpostComponent implements OnInit {
  title:string;
  desc:string;
  new_image:File;
  new_link:string;

  constructor(private userService: UserService,private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  onSelectFile(event) { // called each time file input changes
    this.new_image = event.target.files[0];

  }

  createNewPost(){
    const post = new FormData;
    post.append('new_image', this.new_image);
    post.append('desc', this.desc);
    post.append('title', this.title);
    post.append('new_link', this.new_link);

    this.userService.newPost(post).subscribe(
      response => {
        alert("NewPost has been created"),
        this.router.navigate(['/'])
      },
      error => console.log('error',error)
    );
  }
}
