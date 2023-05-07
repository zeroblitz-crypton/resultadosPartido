import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaralumnoComponent } from './editaralumno.component';

describe('EditaralumnoComponent', () => {
  let component: EditaralumnoComponent;
  let fixture: ComponentFixture<EditaralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaralumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
