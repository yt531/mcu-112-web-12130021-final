import { JsonPipe } from '@angular/common';
import { IArticleForm } from './../interface/article-form.interface';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-article-form-page',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './article-form-page.component.html',
  styleUrl: './article-form-page.component.css',
})
export class ArticleFormPageComponent {
  readonly form = new FormGroup<IArticleForm>({
    title: new FormControl<string | null>(null),
    description: new FormControl<string | null>(null),
    content: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    favoriteCount: new FormControl<number>(0, { nonNullable: true }),
    author: new FormControl<string>('Jeff', { nonNullable: true }),
    tags: new FormArray<FormControl<string | null>>([]),
  });

  get title(): FormControl<string | null> {
    return this.form.get('title') as FormControl<string | null>;
  }

  get description(): FormControl<string | null> {
    return this.form.get('description') as FormControl<string | null>;
  }

  get favoriteCount(): FormControl<number> {
    return this.form.get('favoriteCount') as FormControl<number>;
  }

  get author(): FormControl<string | null> {
    return this.form.get('author') as FormControl<string | null>;
  }

  get tags(): FormArray<FormControl<string | null>> {
    return this.form.get('tags') as FormArray<FormControl<string | null>>;
  }
}
