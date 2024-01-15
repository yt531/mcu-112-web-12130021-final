import { FavoriteButtonComponent } from './../favorite-button/favorite-button.component';
import { Component, HostBinding } from '@angular/core';

import { TagListComponent } from '../tag-list/tag-list.component';
import { DatePipe } from '@angular/common';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [DatePipe, FavoriteButtonComponent, TagListComponent],
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
    content:
      'Aut facilis qui. Cupiditate sit ratione eum sunt rerum impedit. Qui suscipit debitis et et voluptates voluptatem voluptatibus. Quas voluptatum quae corporis corporis possimus.',
    favoriteCount: 30,
    author: 'Jeff',
    createDate: new Date(2024, 6, 4),
    tags: ['enim', 'repellat', 'est', 'eos'],
  });
}
