import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpprofessionnellesComponent } from './expprofessionnelles.component';

describe('ExpprofessionnellesComponent', () => {
  let component: ExpprofessionnellesComponent;
  let fixture: ComponentFixture<ExpprofessionnellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpprofessionnellesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpprofessionnellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
