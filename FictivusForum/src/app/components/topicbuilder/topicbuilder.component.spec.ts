import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicbuilderComponent } from './topicbuilder.component';

describe('TopicbuilderComponent', () => {
  let component: TopicbuilderComponent;
  let fixture: ComponentFixture<TopicbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
