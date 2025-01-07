import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneingradientComponent } from './oneingradient.component';

describe('OneingradientComponent', () => {
  let component: OneingradientComponent;
  let fixture: ComponentFixture<OneingradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneingradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneingradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
