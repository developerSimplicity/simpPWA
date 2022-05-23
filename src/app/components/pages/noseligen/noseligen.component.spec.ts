import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoseligenComponent } from './noseligen.component';

describe('NoseligenComponent', () => {
  let component: NoseligenComponent;
  let fixture: ComponentFixture<NoseligenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoseligenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoseligenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
