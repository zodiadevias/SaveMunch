import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesssignupComponent } from './businesssignup.component';

describe('BusinesssignupComponent', () => {
  let component: BusinesssignupComponent;
  let fixture: ComponentFixture<BusinesssignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinesssignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinesssignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
