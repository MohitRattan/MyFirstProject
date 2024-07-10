import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorthIndianMenuComponent } from './sorth-indian-menu.component';

describe('SorthIndianMenuComponent', () => {
  let component: SorthIndianMenuComponent;
  let fixture: ComponentFixture<SorthIndianMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorthIndianMenuComponent]
    });
    fixture = TestBed.createComponent(SorthIndianMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
