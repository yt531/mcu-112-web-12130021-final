import { Component } from '@angular/core';

import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';
import { ArticleTabComponent } from '../article-tab/article-tab.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ArticleTabComponent, ArticlePreviewComponent, TagSidebarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  selectedTab: 'user' | 'global' = 'global';
  onSelectedTabChange(selectedTab: 'user' | 'global'): void {
    this.selectedTab = selectedTab;
  }
}
