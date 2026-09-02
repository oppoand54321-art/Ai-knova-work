import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuantStudio } from './quant-studio';

describe('QuantStudio', () => {
  let component: QuantStudio;
  let fixture: ComponentFixture<QuantStudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantStudio]
    }).compileComponents();

    fixture = TestBed.createComponent(QuantStudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});