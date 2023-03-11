import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsigneeComponent } from './create-consignee.component';

describe('CreateConsigneeComponent', () => {
  let component: CreateConsigneeComponent;
  let fixture: ComponentFixture<CreateConsigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConsigneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConsigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
