import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresseesComponent } from './addressees.component';

describe('AddresseesComponent', () => {
  let component: AddresseesComponent;
  let fixture: ComponentFixture<AddresseesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddresseesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddresseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
