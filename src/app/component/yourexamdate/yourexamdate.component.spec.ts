import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourexamdateComponent } from './yourexamdate.component';

describe('YourexamdateComponent', () => {
  let component: YourexamdateComponent;
  let fixture: ComponentFixture<YourexamdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourexamdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourexamdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
