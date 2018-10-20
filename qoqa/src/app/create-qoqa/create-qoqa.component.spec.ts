import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQoqaComponent } from './create-qoqa.component';

describe('CreateQoqaComponent', () => {
  let component: CreateQoqaComponent;
  let fixture: ComponentFixture<CreateQoqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQoqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQoqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
