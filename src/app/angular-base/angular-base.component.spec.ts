import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBaseComponent } from './angular-base.component';

describe('AngularBaseComponent', () => {
  let component: AngularBaseComponent;
  let fixture: ComponentFixture<AngularBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
