import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesMenuComponent } from './beverages-menu.component';

describe('BeveragesMenuComponent', () => {
  let component: BeveragesMenuComponent;
  let fixture: ComponentFixture<BeveragesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeveragesMenuComponent]
    });
    fixture = TestBed.createComponent(BeveragesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
