import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment.dev';

import { DespesasDTO } from 'src/app/DTO/DespesasDTO';
import { AbstractHandleError } from '../AbstractHandleError';

@Injectable({
  providedIn: 'root',
})
export class DespesasService extends AbstractHandleError {
  url: string = environment.despesasUrl + 'despesas';

  constructor(private http: HttpClient) {
    super();
  }

  getDespesas(): Observable<DespesasDTO[]> {
    return this.http
      .get<DespesasDTO[]>(this.url)
      .pipe(retry(3), catchError(this.handleError));
  }
}
