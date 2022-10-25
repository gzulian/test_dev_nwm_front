import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TefComponent } from './tef.component';

describe('TefComponent', () => {
  let component: TefComponent;
  let fixture: ComponentFixture<TefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
