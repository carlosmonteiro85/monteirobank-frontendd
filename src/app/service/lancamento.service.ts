import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../models/lancamento';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: HttpClient) { }

  create(request: Lancamento){
    return this.http.post( `${API_CONFIG.baseUrl}/lancamento`, request, {
      observe:'response',
      responseType: 'text'
    })  
  }

  findAll(tipoCategoria: number) {
    return this.http.get<Lancamento[]>(`${API_CONFIG.baseUrl}/lancamento/${tipoCategoria}`);
  }

  getTotalMensal(tipoCategoria: number) {
    return this.http.get<string>(`${API_CONFIG.baseUrl}/lancamento/total-lancamentos/${tipoCategoria}`, { responseType: 'text' as 'json' });
  }

  getTotalAno(tipoCategoria: number) {
    return this.http.get<string>(`${API_CONFIG.baseUrl}/lancamento/total-lancamentos-anual/${tipoCategoria}`, { responseType: 'text' as 'json' });
  }

  getPorcentagem(tipoCategoria: number) {
    return this.http.get<string>(`${API_CONFIG.baseUrl}/lancamento/porcentagens/${tipoCategoria}`, { responseType: 'text' as 'json' });
  }
}
