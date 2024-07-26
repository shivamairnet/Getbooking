import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmcancelComponent } from './confirmcancel.component';

describe('ConfirmcancelComponent', () => {
  let component: ConfirmcancelComponent;
  let fixture: ComponentFixture<ConfirmcancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmcancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
