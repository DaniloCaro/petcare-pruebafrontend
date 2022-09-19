import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtniconComponent } from './btnicon.component';

describe('BtniconComponent', () => {
  let component: BtniconComponent;
  let fixture: ComponentFixture<BtniconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtniconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtniconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
