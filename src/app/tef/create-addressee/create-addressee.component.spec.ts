import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddresseeComponent } from './create-addressee.component';

describe('CreateAddresseeComponent', () => {
  let component: CreateAddresseeComponent;
  let fixture: ComponentFixture<CreateAddresseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAddresseeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAddresseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
