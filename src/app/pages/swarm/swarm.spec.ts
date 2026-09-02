import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Swarm } from './swarm';

describe('Swarm', () => {
let component: Swarm;
let fixture: ComponentFixture<Swarm>;

beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [Swarm]
}).compileComponents();

fixture = TestBed.createComponent(Swarm);
component = fixture.componentInstance;
fixture.detectChanges();

});

it('should create', () => {
expect(component).toBeTruthy();
});
});