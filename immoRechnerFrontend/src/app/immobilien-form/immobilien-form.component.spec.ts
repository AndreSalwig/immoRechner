import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilienFormComponent } from './immobilien-form.component';

describe('ImmobilienFormComponent', () => {
  let component: ImmobilienFormComponent;
  let fixture: ComponentFixture<ImmobilienFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmobilienFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmobilienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
