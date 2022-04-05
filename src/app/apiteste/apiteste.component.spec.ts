import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitesteComponent } from './apiteste.component';

describe('ApitesteComponent', () => {
  let component: ApitesteComponent;
  let fixture: ComponentFixture<ApitesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApitesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApitesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
