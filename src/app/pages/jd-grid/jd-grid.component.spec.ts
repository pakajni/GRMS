import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdGridComponent } from './jd-grid.component';

describe('JdGridComponent', () => {
  let component: JdGridComponent;
  let fixture: ComponentFixture<JdGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
