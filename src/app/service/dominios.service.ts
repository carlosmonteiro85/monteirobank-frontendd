import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class DominiosService {

  constructor(private http: HttpClient) { }

  getCategorias(tipoCategoria: number) {
    return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/dominios/${tipoCategoria}`);
  }

  getVersao() {
    return this.http.get<string>(`${API_CONFIG.baseUrl}/dominios/versao`, { responseType: 'text' as 'json' });
}

}
