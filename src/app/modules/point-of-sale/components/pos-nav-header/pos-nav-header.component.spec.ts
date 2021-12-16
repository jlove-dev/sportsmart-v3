import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosNavHeaderComponent } from './pos-nav-header.component';

describe('PosNavHeaderComponent', () => {
  let component: PosNavHeaderComponent;
  let fixture: ComponentFixture<PosNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
