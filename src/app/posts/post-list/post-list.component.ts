import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import PostDto from '../post.dto';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  showForm: boolean = false;
  data: any[] = [];
  constructor(private post: PostService) { }

  ngOnInit() {
    this.data = this.post.list() as any;
  }

  createPost() {
    this.showForm = true;
  }

  addPost(form) {
    if (form.valid) {
      console.log(form.value)
      this.post.save(form.value);
    }
  }

}
