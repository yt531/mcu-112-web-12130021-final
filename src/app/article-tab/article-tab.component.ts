import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-tab.component.html',
  styleUrl: './article-tab.component.css',
})
export class ArticleTabComponent {
  @HostBinding('class') class = 'article-tab';
}
