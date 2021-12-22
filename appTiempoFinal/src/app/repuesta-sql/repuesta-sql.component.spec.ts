import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestaSQLComponent } from './repuesta-sql.component';

describe('RepuestaSQLComponent', () => {
  let component: RepuestaSQLComponent;
  let fixture: ComponentFixture<RepuestaSQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestaSQLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestaSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
