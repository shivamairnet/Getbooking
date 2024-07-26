import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagegenerateComponent } from './packagegenerate.component';

describe('PackagegenerateComponent', () => {
  let component: PackagegenerateComponent;
  let fixture: ComponentFixture<PackagegenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagegenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagegenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
