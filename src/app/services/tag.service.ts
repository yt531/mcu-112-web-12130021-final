import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private readonly url = 'http://localhost:3000/tags';
  private readonly HttpClient = inject(HttpClient);
  getList(): Observable<string[]> {
    return this.HttpClient.get<string[]>(this.url);
  }
}
