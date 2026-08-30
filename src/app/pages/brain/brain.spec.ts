import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Brain } from './brain';

describe('Brain', () => {
  let component: Brain;
  let fixture: ComponentFixture<Brain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brain],
    }).compileComponents();

    fixture = TestBed.createComponent(Brain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
