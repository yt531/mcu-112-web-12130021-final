import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContentPageComponent } from './article-content-page.component';

describe('ArticleContentPageComponent', () => {
  let component: ArticleContentPageComponent;
  let fixture: ComponentFixture<ArticleContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleContentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
