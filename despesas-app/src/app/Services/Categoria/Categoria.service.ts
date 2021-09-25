import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { CategoriaDTO } from 'src/app/DTO/CategoriaDTO';
import { AbstractHandleError } from '../AbstractHandleError';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService extends AbstractHandleError {
  url: string = environment.despesasUrl + 'categorias';

  constructor(private http: HttpClient) {
    super();
  }

  getCategorias(): Observable<CategoriaDTO[]> {
    return this.http
      .get<CategoriaDTO[]>(this.url)
      .pipe(retry(3), catchError(this.handleError));
  }
}
