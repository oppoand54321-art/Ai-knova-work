import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Universal } from './universal';

describe('Universal', () => {
  let component: Universal;
  let fixture: ComponentFixture<Universal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Universal],
    }).compileComponents();

    fixture = TestBed.createComponent(Universal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
