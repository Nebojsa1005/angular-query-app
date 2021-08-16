import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  allPosts: Post[] = []
  filteredPosts: Post[] = []
  filterText: string = ''

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((data: Post[]) => {
      this.allPosts = data
      this.filteredPosts = data   
    })    
  }

  filter() {
      this.postsService.getPosts().subscribe(data => {
        if (this.filterText.length > 0) {         
          this.filteredPosts = data.filter(post => {
            return post.title.includes(this.filterText)
          })  
        } else {
          this.filteredPosts = [...this.allPosts]
        }
      })
  }
}
