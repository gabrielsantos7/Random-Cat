import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatImageComponent } from './cat-image.component';

describe('CatImageComponent', () => {
  let component: CatImageComponent;
  let fixture: ComponentFixture<CatImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatImageComponent]
    });
    fixture = TestBed.createComponent(CatImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
