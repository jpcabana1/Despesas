import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment.dev';

import { AbstractHandleError } from '../AbstractHandleError';
import { TotalDTO } from 'src/app/DTO/TotalDTO';

@Injectable({
  providedIn: 'root',
})
export class TotalService extends AbstractHandleError {
  url: string = environment.despesasUrl + 'total';

  constructor(private http: HttpClient) {
    super();
  }

  getTotalById(id: number): Observable<TotalDTO> {
    return this.http
      .get<TotalDTO>(this.url + '/' + id)
      .pipe(retry(3), catchError(this.handleError));
  }
}
