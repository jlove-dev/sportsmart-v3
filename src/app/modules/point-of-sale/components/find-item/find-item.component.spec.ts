import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindItemComponent } from './find-item.component';

describe('FindItemComponent', () => {
  let component: FindItemComponent;
  let fixture: ComponentFixture<FindItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
