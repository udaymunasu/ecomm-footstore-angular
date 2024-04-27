import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductvarietirsComponent } from './productvarietirs.component';

describe('ProductvarietirsComponent', () => {
  let component: ProductvarietirsComponent;
  let fixture: ComponentFixture<ProductvarietirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductvarietirsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductvarietirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
