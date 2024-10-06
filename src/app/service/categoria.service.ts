import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  create(usuarioRequest: Categoria){
    return this.http.post( `${API_CONFIG.baseUrl}/categoria`, usuarioRequest, {
      observe:'response',
      responseType: 'text'
    })  
  }
}
