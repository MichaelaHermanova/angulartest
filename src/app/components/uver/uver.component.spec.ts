import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UverComponent } from './uver.component';

describe('UverComponent', () => {
  let component: UverComponent;
  let fixture: ComponentFixture<UverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
