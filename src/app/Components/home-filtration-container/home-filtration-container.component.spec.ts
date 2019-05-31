import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFiltrationContainerComponent } from './home-filtration-container.component';

describe('HomeFiltrationContainerComponent', () => {
  let component: HomeFiltrationContainerComponent;
  let fixture: ComponentFixture<HomeFiltrationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFiltrationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFiltrationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
