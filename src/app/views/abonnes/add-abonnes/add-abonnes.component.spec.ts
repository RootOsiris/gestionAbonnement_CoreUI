import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbonnesComponent } from './add-abonnes.component';

describe('AddAbonnesComponent', () => {
  let component: AddAbonnesComponent;
  let fixture: ComponentFixture<AddAbonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAbonnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAbonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
