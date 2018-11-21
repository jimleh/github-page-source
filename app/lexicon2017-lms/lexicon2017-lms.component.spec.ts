import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lexicon2017LMSComponent } from './lexicon2017-lms.component';

describe('Lexicon2017LMSComponent', () => {
  let component: Lexicon2017LMSComponent;
  let fixture: ComponentFixture<Lexicon2017LMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lexicon2017LMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lexicon2017LMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
