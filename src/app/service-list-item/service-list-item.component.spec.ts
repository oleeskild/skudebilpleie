import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListItemComponent } from './service-list-item.component';

describe('ServiceListItemComponent', () => {
  let component: ServiceListItemComponent;
  let fixture: ComponentFixture<ServiceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
