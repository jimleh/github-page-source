import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceBuilderComponent } from './sentence-builder.component';

describe('SentenceBuilderComponent', () => {
  let component: SentenceBuilderComponent;
  let fixture: ComponentFixture<SentenceBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
