import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sentinel } from './sentinel';

describe('Sentinel', () => {
  let component: Sentinel;
  let fixture: ComponentFixture<Sentinel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sentinel]
    }).compileComponents();

    fixture = TestBed.createComponent(Sentinel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});