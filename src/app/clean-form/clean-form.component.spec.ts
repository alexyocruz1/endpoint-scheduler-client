import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanFormComponent } from './clean-form.component';

describe('CleanFormComponent', () => {
  let component: CleanFormComponent;
  let fixture: ComponentFixture<CleanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
