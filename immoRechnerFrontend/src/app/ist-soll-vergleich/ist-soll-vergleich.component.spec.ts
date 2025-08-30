import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstSollVergleichComponent } from './ist-soll-vergleich.component';

describe('IstSollVergleichComponent', () => {
  let component: IstSollVergleichComponent;
  let fixture: ComponentFixture<IstSollVergleichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IstSollVergleichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IstSollVergleichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
