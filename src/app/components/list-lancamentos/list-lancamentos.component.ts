import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LancamentoList } from 'src/app/models/lancamento-list';
import { LancamentoService } from 'src/app/service/lancamento.service';
import { UtilitariosService } from 'src/app/service/utilitarios.service';

@Component({
  selector: 'app-list-lancamentos',
  templateUrl: './list-lancamentos.component.html',
  styleUrls: ['./list-lancamentos.component.css']
})
export class ListLancamentosComponent implements OnInit {
  lancamentos: LancamentoList[] = [];

  constructor(private lancamentosService: LancamentoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  async findAll() {
    try {
        const response = await this.lancamentosService.findAll(1).toPromise();
        this.lancamentos = await Promise.all(response.map(async (item: any) => {
            return new LancamentoList(
                item.id,
                UtilitariosService.formatDate(new Date(item.dataCadastro)),
                item.categoria,
                item.descricao,
                item.impactoReceita.toString(),
                item.valor,
                UtilitariosService.formatDate(new Date(item.pagoEm)),
                item.dataVencimento != null ? UtilitariosService.formatDate(new Date(item.dataVencimento)) : null,
                item.codStatus
            );
        }));
    } catch (error) {
        console.log(error);
    }
  }
}
