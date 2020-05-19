import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixKeyComponent } from './six-key.component';

describe('SixKeyComponent', () => {
  let component: SixKeyComponent;
  let fixture: ComponentFixture<SixKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
