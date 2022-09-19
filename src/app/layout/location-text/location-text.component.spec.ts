import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTextComponent } from './location-text.component';

describe('LocationTextComponent', () => {
  let component: LocationTextComponent;
  let fixture: ComponentFixture<LocationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
