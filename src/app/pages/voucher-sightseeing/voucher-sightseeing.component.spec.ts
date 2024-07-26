import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherSightseeingComponent } from './voucher-sightseeing.component';

describe('VoucherSightseeingComponent', () => {
  let component: VoucherSightseeingComponent;
  let fixture: ComponentFixture<VoucherSightseeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherSightseeingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherSightseeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
