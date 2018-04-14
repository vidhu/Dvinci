import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancelistComponent } from './financelist.component';

describe('FinancelistComponent', () => {
  let component: FinancelistComponent;
  let fixture: ComponentFixture<FinancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
