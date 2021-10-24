import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsignatureComponent } from './recordsignature.component';

describe('RecordsignatureComponent', () => {
  let component: RecordsignatureComponent;
  let fixture: ComponentFixture<RecordsignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
