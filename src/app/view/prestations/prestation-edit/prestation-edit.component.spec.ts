import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationEditComponent } from './prestation-edit.component';

describe('PrestationEditComponent', () => {
  let component: PrestationEditComponent;
  let fixture: ComponentFixture<PrestationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
