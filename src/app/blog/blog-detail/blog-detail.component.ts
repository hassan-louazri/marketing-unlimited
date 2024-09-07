import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../core/markdown.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogContent!: string;
  blogFile!: string;

  constructor(private route: ActivatedRoute ,private http: HttpClient, private markdown: MarkdownService) {}

  ngOnInit(): void {
    this.blogFile = this.route.snapshot.paramMap.get('file') || '';
    this.loadBlog(this.blogFile);
  }

  loadBlog(file: string) {
    this.http.get(`assets/posts/${file}`, { responseType: 'text' })
      .subscribe((markdown: string) => {
        this.blogContent = this.markdown.loadMarkdown(markdown);
      }
    );
  }
}
