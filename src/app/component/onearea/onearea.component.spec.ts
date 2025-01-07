import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneareaComponent } from './onearea.component';

describe('OneareaComponent', () => {
  let component: OneareaComponent;
  let fixture: ComponentFixture<OneareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
