import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoomerecelibComponent } from './ecoomerecelib.component';

describe('EcoomerecelibComponent', () => {
  let component: EcoomerecelibComponent;
  let fixture: ComponentFixture<EcoomerecelibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoomerecelibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoomerecelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
