import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponentComponent } from './shipping-component.component';

describe('ShippingComponentComponent', () => {
  let component: ShippingComponentComponent;
  let fixture: ComponentFixture<ShippingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
