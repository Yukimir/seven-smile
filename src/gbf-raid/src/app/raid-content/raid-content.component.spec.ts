import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidContentComponent } from './raid-content.component';

describe('RaidContentComponent', () => {
  let component: RaidContentComponent;
  let fixture: ComponentFixture<RaidContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
