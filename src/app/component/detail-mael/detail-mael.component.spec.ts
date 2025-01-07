import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMaelComponent } from './detail-mael.component';

describe('DetailMaelComponent', () => {
  let component: DetailMaelComponent;
  let fixture: ComponentFixture<DetailMaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMaelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
