import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {

  blogs = [
    { title: 'Blog Post 1', description: 'This is a brief description of blog post 1.', file: 'article-one.md', image: '../../../assets/images/agency.jpg' ,uploaded_date:'04 FEB'},
    { title: 'Blog Post 2', description: 'This is a brief description of blog post 2.', file: 'post2.md', image: '../../../assets/images/conversions.jpg' ,uploaded_date:'04 FEB'},
    { title: 'Blog Post 3', description: 'This is a brief description of blog post 3.', file: 'post3.md', image: '../../../assets/images/hero-img.jpg' ,uploaded_date:'04 FEB'},
    { title: 'Blog Post 4', description: 'This is a brief description of blog post 4.', file: 'post4.md', image: '../../../assets/images/free-time.jpeg' ,uploaded_date:'04 FEB'},
    { title: 'Blog Post 5', description: 'This is a brief description of blog post 5.', file: 'post5.md', image: '../../../assets/images/article.jpg' ,uploaded_date:'04 FEB'},
    { title: 'Blog Post 6', description: 'This is a brief description of blog post 6.', file: 'post6.md', image: '../../../assets/images/conversions.jpg',uploaded_date:'04 FEB' }
  ];
  Latestblogs = [
    { title: 'Blog Post 1', description: 'This is a brief description of blog post 1.', file: 'post1.md', image: '../../../assets/images/free-time.jpeg',uploaded_date:'04 FEB' },
    { title: 'Blog Post 2', description: 'This is a brief description of blog post 2.', file: 'post2.md', image: '../../../assets/images/article.jpg',uploaded_date:'04 FEB' },
    { title: 'Blog Post 3', description: 'This is a brief description of blog post 3.', file: 'post3.md', image: '../../../assets/images/conversions.jpg',uploaded_date:'04 FEB' }
  ];
  constructor(private router: Router) {}

  onCardClick() {
    console.log("button clicked");
  }
}
