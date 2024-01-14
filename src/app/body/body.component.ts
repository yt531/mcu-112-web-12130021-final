import { Component } from '@angular/core';

import { ArticleListComponent } from './../article-list/article-list.component';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ArticleListComponent, TagListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
