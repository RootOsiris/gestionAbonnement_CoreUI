import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbonnesComponent } from './edit-abonnes.component';

describe('EditAbonnesComponent', () => {
  let component: EditAbonnesComponent;
  let fixture: ComponentFixture<EditAbonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAbonnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAbonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
