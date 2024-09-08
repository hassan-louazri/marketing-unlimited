import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  mailText:string = "";
  howMuchToCutInDescription : number = 200;
  blogs = [
    {
      id: 1,
      title: 'Avoid This Mistake in Business at All Cost',
      description: 'In this article, we will break down how to avoid making this brutal mistake and highlight the key to your long-term success.',
      file: 'article-2024-09-05.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '05 SEP 2024',
    },
    {
      id: 2,
      title: 'A Simple Step To Become Top Choice in Your Market',
      description: 'In this article, we will talk about how to become and stay the top choice in your market.',
      file: 'article-2024-08-29.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '29 AUG 2024',
    },
    {
      id: 3,
      title: "If You Can't Find Enough Clients, This is For You",
      description: 'In this article, you will learn how a hungry crowd can supercharge your business and can GUARANTEE making more money than you know what to do with.',
      file: 'article-2024-08-16.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '16 AUG 2024',
    },
    {
      id: 4,
      title: 'Reach Ultimate Success By Leveraging This One Valuable Asset',
      description: 'In this article, we will discuss how to project the perfect image for your audience to make them engage with your content.',
      file: 'article-2024-07-24.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '24 JUL 2024',
    },
    {
      id: 5,
      title: 'Discover The Secret about Marketing That Everyone is Hiding',
      description: "In this article, I'll explain why most businesses falter at their first hurdle, how you can push through it, and what it takes to achieve your success.",
      file: 'article-2024-07-04.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '04 JUL 2024',
    },
  ];
  Latestblogs = [
    {
      id: 1,
      title: 'Avoid This Mistake in Business at All Cost',
      description: 'In this article, we will break down how to avoid making this brutal mistake and highlight the key to your long-term success.',
      file: 'article-2024-09-05.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '05 SEP 2024',
    },
    {
      id: 2,
      title: 'A Simple Step To Become Top Choice in Your Market',
      description: 'In this article, we will talk about how to become and stay the top choice in your market.',
      file: 'article-2024-08-29.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '29 AUG 2024',
    },
    {
      id: 3,
      title: "If You Can't Find Enough Clients, This is For You",
      description: 'In this article, you will learn how a hungry crowd can supercharge your business and can GUARANTEE making more money than you know what to do with.',
      file: 'article-2024-08-16.md',
      image: '../../../assets/images/article.jpg',
      dateCreated: '16 AUG 2024',
    }
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
