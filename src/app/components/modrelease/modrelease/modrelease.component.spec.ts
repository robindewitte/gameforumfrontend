import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModreleaseComponent } from './modrelease.component';

describe('ModreleaseComponent', () => {
  let component: ModreleaseComponent;
  let fixture: ComponentFixture<ModreleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModreleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
