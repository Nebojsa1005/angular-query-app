import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  selectedPost!: Post 

  constructor(private route: ActivatedRoute, private postsService: PostsService, private location: Location) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id    
    this.postsService.getPosts().subscribe(data => {      
      const wantedPost = data.filter(post => {
        return post.id === +id
      })      
      this.selectedPost = wantedPost[0]
      console.log(this.selectedPost); 
    })

  }

  onGoBack() {
    this.location.back()
  }

}
