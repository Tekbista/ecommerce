import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponentsComponent } from './payment-components.component';

describe('PaymentComponentsComponent', () => {
  let component: PaymentComponentsComponent;
  let fixture: ComponentFixture<PaymentComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
