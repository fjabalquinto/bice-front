import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBiceComponent } from './header-bice.component';

describe('HeaderBiceComponent', () => {
  let component: HeaderBiceComponent;
  let fixture: ComponentFixture<HeaderBiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe ser creado', () => {
    expect(component).toBeTruthy();
  });
});
