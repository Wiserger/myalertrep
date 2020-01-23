import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallertlibraryComponent } from './myallertlibrary.component';

describe('MyallertlibraryComponent', () => {
  let component: MyallertlibraryComponent;
  let fixture: ComponentFixture<MyallertlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyallertlibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyallertlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
