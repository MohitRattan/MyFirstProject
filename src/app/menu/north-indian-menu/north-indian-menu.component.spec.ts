import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthIndianMenuComponent } from './north-indian-menu.component';

describe('NorthIndianMenuComponent', () => {
  let component: NorthIndianMenuComponent;
  let fixture: ComponentFixture<NorthIndianMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthIndianMenuComponent]
    });
    fixture = TestBed.createComponent(NorthIndianMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
