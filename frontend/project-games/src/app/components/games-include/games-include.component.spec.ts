import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesIncludeComponent } from './games-include.component';

describe('GamesIncludeComponent', () => {
  let component: GamesIncludeComponent;
  let fixture: ComponentFixture<GamesIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesIncludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
