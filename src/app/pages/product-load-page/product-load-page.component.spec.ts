import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLoadPageComponent } from './product-load-page.component';

describe('ProductLoadPageComponent', () => {
  let component: ProductLoadPageComponent;
  let fixture: ComponentFixture<ProductLoadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLoadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
