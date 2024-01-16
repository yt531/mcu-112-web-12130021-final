import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ArticleFormPageComponent } from './article-form-page/article-form-page.component';
import { ArticleContentPageComponent } from './article-content-page/article-content-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'article/form', component: ArticleFormPageComponent },
  { path: 'article/content/:id', component: ArticleContentPageComponent },
];
