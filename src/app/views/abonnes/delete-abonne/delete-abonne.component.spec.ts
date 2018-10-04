import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAbonneComponent } from './delete-abonne.component';

describe('DeleteAbonneComponent', () => {
  let component: DeleteAbonneComponent;
  let fixture: ComponentFixture<DeleteAbonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAbonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
