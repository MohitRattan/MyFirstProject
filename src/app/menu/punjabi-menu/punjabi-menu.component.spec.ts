import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabiMenuComponent } from './punjabi-menu.component';

describe('PunjabiMenuComponent', () => {
  let component: PunjabiMenuComponent;
  let fixture: ComponentFixture<PunjabiMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PunjabiMenuComponent]
    });
    fixture = TestBed.createComponent(PunjabiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
