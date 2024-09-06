import { Injectable } from '@angular/core';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  constructor() {}

  loadMarkdown(markdown: string): string {
    try {
      const result = remark().use(remarkHtml).processSync(markdown);
      return result.toString();
    } catch (error) {
      console.error('Error converting markdown to HTML: ', error);
      return '';
    }
  }
}
