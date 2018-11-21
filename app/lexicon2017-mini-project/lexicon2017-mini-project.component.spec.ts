import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lexicon2017MiniProjectComponent } from './lexicon2017-mini-project.component';

describe('Lexicon2017MiniProjectComponent', () => {
  let component: Lexicon2017MiniProjectComponent;
  let fixture: ComponentFixture<Lexicon2017MiniProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lexicon2017MiniProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lexicon2017MiniProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
