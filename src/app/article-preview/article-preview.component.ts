import { Component, HostBinding } from '@angular/core';

import { Article } from '../model/article';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview';
  tags = ['enim', 'repellat', 'est', 'eos'];
  article = new Article({
    id: 1,
    title:
      'Ill quantify the redundant TCP bus, that should hard drive the ADP bandwidth!',
    content: `
      Aut facilis qui. Cupiditate sit ratione eum sunt rerum impedit. Qui suscipit
      debitis et et voluptates voluptatem voluptatibus. Quas voluptatum quae
      corporis corporis possimus.
      `,
    favoriteCount: 30,
    author: 'Jeff',
    createDate: new Date(2024, 6, 4),
    tags: ['enim', 'repellat', 'est', 'eos'],
  });
}
