import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailesComponent } from './quote-detailes.component';

describe('QuoteDetailesComponent', () => {
  let component: QuoteDetailesComponent;
  let fixture: ComponentFixture<QuoteDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
