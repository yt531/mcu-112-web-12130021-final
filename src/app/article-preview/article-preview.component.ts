import { ArticleService } from './../services/article.service';
import { Component, HostBinding, inject } from '@angular/core';

import { ArticleListComponent } from '../article-list/article-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [AsyncPipe, ArticleListComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  private readonly articleService = inject(ArticleService);

  @HostBinding('class') class = 'article-preview';
  articles$ = this.articleService.getList();
}
