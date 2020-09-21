import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverComponent } from './waiver.component';

describe('WaiverComponent', () => {
  let component: WaiverComponent;
  let fixture: ComponentFixture<WaiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
