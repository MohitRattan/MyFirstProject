import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertMenuComponent } from './dessert-menu.component';

describe('DessertMenuComponent', () => {
  let component: DessertMenuComponent;
  let fixture: ComponentFixture<DessertMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertMenuComponent]
    });
    fixture = TestBed.createComponent(DessertMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
