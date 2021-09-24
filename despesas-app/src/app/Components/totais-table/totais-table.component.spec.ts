/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TotaisTable } from './totais-table.component';

describe('FooterComponent', () => {
  let component: TotaisTable;
  let fixture: ComponentFixture<TotaisTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaisTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaisTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
