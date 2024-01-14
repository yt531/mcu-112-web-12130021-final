import { Component, HostBinding } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css',
})
export class TagListComponent {
  @HostBinding('class') class = 'tag-list';
  tags = ['enim', 'repellat', 'est', 'eos'];
}
