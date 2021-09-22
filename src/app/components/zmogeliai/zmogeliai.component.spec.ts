import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmogeliaiComponent } from './zmogeliai.component';

describe('ZmogeliaiComponent', () => {
  let component: ZmogeliaiComponent;
  let fixture: ComponentFixture<ZmogeliaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZmogeliaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmogeliaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
