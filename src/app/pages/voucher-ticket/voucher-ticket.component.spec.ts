import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherTicketComponent } from './voucher-ticket.component';

describe('VoucherTicketComponent', () => {
  let component: VoucherTicketComponent;
  let fixture: ComponentFixture<VoucherTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
