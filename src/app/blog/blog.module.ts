import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    TranslateModule
  ]
})
export class BlogModule { }
