import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuotetiedotComponent } from './tuotetiedot.component';

describe('TuotetiedotComponent', () => {
  let component: TuotetiedotComponent;
  let fixture: ComponentFixture<TuotetiedotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuotetiedotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuotetiedotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
