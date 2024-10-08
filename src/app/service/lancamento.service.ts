import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../models/lancamento';
import { API_CONFIG } from '../config/api.config';

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
}
