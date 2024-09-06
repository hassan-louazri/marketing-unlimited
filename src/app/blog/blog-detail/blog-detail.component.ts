import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../core/markdown.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogContent: string = '';

  constructor(private http: HttpClient, private markdown: MarkdownService) {}

  ngOnInit(): void {
    this.http.get('assets/posts/article-one.md', { responseType: 'text' })
      .subscribe((markdown: string) => {
        this.blogContent = this.markdown.loadMarkdown(markdown);
      });
  }
}
