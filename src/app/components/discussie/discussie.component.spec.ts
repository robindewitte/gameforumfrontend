import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussieComponent } from './discussie.component';

describe('DiscussieComponent', () => {
  let component: DiscussieComponent;
  let fixture: ComponentFixture<DiscussieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
