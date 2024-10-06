import { Component, OnInit } from '@angular/core';
import { LancamentoList } from 'src/app/models/lancamento-list';

@Component({
  selector: 'app-list-lancamentos',
  templateUrl: './list-lancamentos.component.html',
  styleUrls: ['./list-lancamentos.component.css']
})
export class ListLancamentosComponent implements OnInit {
  lancamentos: LancamentoList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    // this.usuariosService.findAll().subscribe(response => {
    //   this.usuarios = response;
    // }, error => {
    //   console.log(error);
    // });

    this.lancamentos = [
      new LancamentoList(new Date('2024-10-10'), 'Cartão BB', 'Cartão Credito', '28.76', 150.0, new Date('2024-10-10'), new Date('2024-10-05'), 'Pendente'),
      new LancamentoList(new Date('2024-10-10'), 'Cartão NU', 'Cartão Credito','28.76', 80.0, new Date('2024-09-30'), null, 'Vencendo'),
      new LancamentoList(new Date('2024-10-10'), 'Cartão Inter', 'Cartão Credito','28.76', 200.0, new Date('2024-09-25'), new Date('2024-09-22'), 'Pago')
    ];
  }
}
