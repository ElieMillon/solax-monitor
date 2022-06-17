import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityMonitorComponent } from './electricity-monitor.component';

describe('ElectricityMonitorComponent', () => {
  let component: ElectricityMonitorComponent;
  let fixture: ComponentFixture<ElectricityMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
