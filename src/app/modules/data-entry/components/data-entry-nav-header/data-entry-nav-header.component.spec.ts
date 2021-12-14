import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryNavHeaderComponent } from './data-entry-nav-header.component';

describe('DataEntryNavHeaderComponent', () => {
  let component: DataEntryNavHeaderComponent;
  let fixture: ComponentFixture<DataEntryNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
