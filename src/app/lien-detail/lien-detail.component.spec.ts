import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienDetailComponent } from './lien-detail.component';

describe('LienDetailComponent', () => {
  let component: LienDetailComponent;
  let fixture: ComponentFixture<LienDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
