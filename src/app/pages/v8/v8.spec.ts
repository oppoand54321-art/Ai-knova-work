import { ComponentFixture, TestBed } from '@angular/core/testing';
import { V8 } from './v8';

describe('V8', () => {
  let component: V8;
  let fixture: ComponentFixture<V8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V8],
    }).compileComponents();

    fixture = TestBed.createComponent(V8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
