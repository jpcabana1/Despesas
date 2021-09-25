/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IconeService } from './Icone.service';

describe('Service: Icone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconeService]
    });
  });

  it('should ...', inject([IconeService], (service: IconeService) => {
    expect(service).toBeTruthy();
  }));
});
