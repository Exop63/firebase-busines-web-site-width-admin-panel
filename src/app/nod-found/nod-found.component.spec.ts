import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodFoundComponent } from './nod-found.component';

describe('NodFoundComponent', () => {
  let component: NodFoundComponent;
  let fixture: ComponentFixture<NodFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
