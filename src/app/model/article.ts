import { FavoriteButtonComponent } from './../favorite-button/favorite-button.component';
export class Article {
  constructor(initDate?: Partial<Article>) {
    Object.assign(this, initDate);
  }
  id!: number;

  title!: string;

  description!: string;

  content!: string;

  favoriteCount!: number;

  author!: string;

  createDate!: Date;

  tags!: string[];
}
