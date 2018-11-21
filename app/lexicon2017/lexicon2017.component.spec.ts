import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lexicon2017Component } from './lexicon2017.component';

describe('Lexicon2017Component', () => {
  let component: Lexicon2017Component;
  let fixture: ComponentFixture<Lexicon2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lexicon2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lexicon2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
