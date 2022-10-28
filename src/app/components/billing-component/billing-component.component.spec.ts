import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingComponentComponent } from './billing-component.component';

describe('BillingComponentComponent', () => {
  let component: BillingComponentComponent;
  let fixture: ComponentFixture<BillingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
