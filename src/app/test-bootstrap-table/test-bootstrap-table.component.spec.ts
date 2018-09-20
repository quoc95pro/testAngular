import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBootstrapTableComponent } from './test-bootstrap-table.component';

describe('TestBootstrapTableComponent', () => {
  let component: TestBootstrapTableComponent;
  let fixture: ComponentFixture<TestBootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
