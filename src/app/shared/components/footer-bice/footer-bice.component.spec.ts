import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBiceComponent } from './footer-bice.component';

describe('FooterBiceComponent', () => {
  let component: FooterBiceComponent;
  let fixture: ComponentFixture<FooterBiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe ser creado', () => {
    expect(component).toBeTruthy();
  });
});
