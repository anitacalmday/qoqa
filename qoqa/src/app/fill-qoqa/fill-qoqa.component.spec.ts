import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillQoqaComponent } from './fill-qoqa.component';

describe('FillQoqaComponent', () => {
  let component: FillQoqaComponent;
  let fixture: ComponentFixture<FillQoqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillQoqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillQoqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
