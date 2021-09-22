import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MokomesComponent } from './mokomes.component';

describe('MokomesComponent', () => {
  let component: MokomesComponent;
  let fixture: ComponentFixture<MokomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MokomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MokomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
