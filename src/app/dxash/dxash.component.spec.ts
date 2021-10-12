import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxashComponent } from './dxash.component';

describe('DxashComponent', () => {
  let component: DxashComponent;
  let fixture: ComponentFixture<DxashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
