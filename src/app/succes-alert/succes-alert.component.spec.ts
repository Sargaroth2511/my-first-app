import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesAlertComponent } from './succes-alert.component';

describe('SuccesAlertComponent', () => {
  let component: SuccesAlertComponent;
  let fixture: ComponentFixture<SuccesAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccesAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccesAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
