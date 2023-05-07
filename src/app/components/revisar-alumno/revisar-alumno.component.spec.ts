import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarAlumnoComponent } from './revisar-alumno.component';

describe('RevisarAlumnoComponent', () => {
  let component: RevisarAlumnoComponent;
  let fixture: ComponentFixture<RevisarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
