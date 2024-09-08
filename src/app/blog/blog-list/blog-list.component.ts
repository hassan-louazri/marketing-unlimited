import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  mailText:string = "";
  howMuchToCutInDescription : number = 380;
  blogs = [
    {
      id: 1,
      title: 'Avoid This Mistake in Business at All Cost',
      description: 'This is a brief description of blog post 1.',
      file: 'article-one.md',
      image: '../../../assets/images/agency.jpg',
      uploaded_date: '04 FEB',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      description: 'This is a brief description of blog post 2.',
      file: 'article-one.md',
      image: '../../../assets/images/conversions.jpg',
      uploaded_date: '04 FEB',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      description: 'This is a brief description of blog post 3.',
      file: 'article-one.md',
      image: '../../../assets/images/hero-img.jpg',
      uploaded_date: '04 FEB',
    },
    {
      id: 4,
      title: 'Blog Post 4',
      description: 'This is a brief description of blog post 4.',
      file: 'article-one.md',
      image: '../../../assets/images/free-time.jpeg',
      uploaded_date: '04 FEB',
    },
    {
      id: 5,
      title: 'Blog Post 5',
      description: 'This is a brief description of blog post 5.',
      file: 'article-one.md',
      image: '../../../assets/images/article.jpg',
      uploaded_date: '04 FEB',
    },
    {
      id: 6,
      title: 'Blog Post 6',
      description: 'This is a brief description of blog post 6.',
      file: 'article-one.md',
      image: '../../../assets/images/conversions.jpg',
      uploaded_date: '04 FEB',
    },
  ];
  Latestblogs = [
    {
      id: 1,
      title: 'Blog Post 1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet consectetur tempora sed assumenda, quod hic. Blanditiis a vel nam, ipsum, est mollitia nobis aspernatur error explicabo, suscipit accusantium eligendi - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet consectetur tempora sed assumenda, quod hic. Blanditiis a vel nam, ipsum, est mollitia nobis aspernatur error explicabo, suscipit accusantium eligendi --- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet consectetur tempora sed assumenda, quod hic. Blanditiis a vel nam, ipsum, est mollitia nobis aspernatur error explicabo, suscipit accusantium eligendi - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet consectetur tempora sed assumenda, quod hic. Blanditiis a vel nam, ipsum, est mollitia nobis aspernatur error explicabo, suscipit accusantium eligendi.',
      file: 'article-one.md',
      image: '../../../assets/images/free-time.jpeg',
      uploaded_date: '04 FEB',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      description: 'This is a brief description of blog post 2.',
      file: 'article-one.md',
      image: '../../../assets/images/article.jpg',
      uploaded_date: '04 FEB',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      description: 'This is a brief description of blog post 3.',
      file: 'article-one.md',
      image: '../../../assets/images/conversions.jpg',
      uploaded_date: '04 FEB',
    },
  ];

  share_func(blog: any): void{
    const title = blog.title;
    const text = blog.description;
    const url = window.location.href+ "/" +blog.file;
    if (navigator.share !== undefined) {
      navigator
        .share({
          title,
          text,
          url
        })
        .then(() => console.log("Shared!"))
        .catch(err => console.error(err));
    } else {
      this.mailText = `mailto:?subject=${title}&body=${text}%0A${url}`;
      window.location.href = this.mailText; 
    }
    
  }
}
