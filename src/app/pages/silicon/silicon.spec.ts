import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Silicon } from './silicon';

describe('Silicon', () => {
  let component: Silicon;
  let fixture: ComponentFixture<Silicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Silicon]
    }).compileComponents();

    fixture = TestBed.createComponent(Silicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});