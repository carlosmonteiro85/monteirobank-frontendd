import { Component, OnInit } from '@angular/core';
import { LancamentoList } from 'src/app/models/lancamento-list';
import { LancamentoService } from 'src/app/service/lancamento.service';
import { UtilitariosService } from 'src/app/service/utilitarios.service';

@Component({
  selector: 'app-list-receitas',
  templateUrl: './list-receitas.component.html',
  styleUrls: ['./list-receitas.component.css']
})
export class ListReceitasComponent implements OnInit {
  lancamentos: LancamentoList[] = [];
  utils = new UtilitariosService();

  constructor(
      private lancamentosService: LancamentoService
    ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.lancamentosService.findAll(2).subscribe(response => {
      this.lancamentos = response.map((item: any) => {
        return new LancamentoList(
          item.id,
          UtilitariosService.formatDate(new Date(item.dataCadastro)),
          item.categoria,          
          item.descricao,               
          null,        
          item.valor,                   
          UtilitariosService.formatDate(new Date(item.pagoEm)), 
          item.dataVencimento != null ? UtilitariosService.formatDate(new Date(item.dataVencimento)) : null,                         
          item.codStatus 
        );
      });
    }, error => {
      console.log(error);
    });
  }
}
