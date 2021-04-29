import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelvingComponent } from './shelving.component';

describe('ShelvingComponent', () => {
  let component: ShelvingComponent;
  let fixture: ComponentFixture<ShelvingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelvingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
