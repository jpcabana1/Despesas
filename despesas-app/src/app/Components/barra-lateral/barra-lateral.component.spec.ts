/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarraLateralComponent } from './barra-lateral.component';

describe('BarraLateralComponent', () => {
  let component: BarraLateralComponent;
  let fixture: ComponentFixture<BarraLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
