import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstohacemosComponent } from './estohacemos.component';

describe('EstohacemosComponent', () => {
  let component: EstohacemosComponent;
  let fixture: ComponentFixture<EstohacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstohacemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstohacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
