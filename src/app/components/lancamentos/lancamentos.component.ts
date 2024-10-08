import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { FormControl, Validators } from '@angular/forms';
import { DominiosService } from 'src/app/service/dominios.service';
import { Lancamento } from 'src/app/models/lancamento';
import { LancamentoService } from 'src/app/service/lancamento.service';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {
  categorias: Categoria[] = []; 
  selectedCategoria: number | null = null;
  tipoLancamento: number | null = 0;
  tipoCategoria: number | null = 0;
  isValid: boolean = false;

  dataCadastro = new FormControl('', [Validators.required]);
  idCategoria = new FormControl('0', [Validators.required]);
  descricao = new FormControl('', [Validators.required]);
  valor = new FormControl('', [Validators.required]);
  pagoEm = new FormControl('');
  codStatus = new FormControl('0', [Validators.required]);
  alerta = new AlertaComponent();

  constructor(
    private dominiosService: DominiosService, 
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit(): void {
  }

  create() {
    if (this.validarForm()) {
      const novoLancamento = new Lancamento(
        null,
        this.dataCadastro.value,
        this.idCategoria.value || this.selectedCategoria,
        this.descricao.value,
        this.valor.value,
        this.pagoEm.value,
        this.codStatus.value
      );

      console.log(novoLancamento);

      this.lancamentoService.create(novoLancamento).subscribe(
        response => {
          // this.resetForm();
          this.alerta.icon = 'success';
          this.alerta.text = 'Categoria criada com sucesso!';
          this.alerta.showAlert();
        },
        error => {
          this.alerta.icon = 'error';
          this.alerta.text = 'Erro ao criar categoria!';
          this.alerta.showAlert();
          console.error('Erro ao criar categoria!', error);
        }
      );
    }
  }

  onTipoLancamentoChange(): void {
    if (this.tipoLancamento && this.tipoLancamento !== 0) {
      this.loadCategorias(this.tipoLancamento);
    } else {
      this.categorias = [];
    }
  }

  onCategoriaChange(): void {
    if (this.tipoCategoria && this.tipoCategoria !== 0) {
      this.loadCategorias(this.tipoCategoria);
    } else {
      this.categorias = [];
    }
  }

  loadCategorias(tipoCategoria: number): void {
    this.dominiosService.getCategorias(tipoCategoria).subscribe(
      (response) => {
        this.categorias = response; 
        this.selectedCategoria = null; 
      },
      (error) => {
        console.error('Erro ao carregar categorias', error);
        this.categorias = []; 
      }
    );
  }

  validarForm(): boolean {
    let isValid = true;
  
    const controls = [
      this.dataCadastro, this.idCategoria, this.descricao,
      this.valor, this.pagoEm, this.codStatus
    ];
  
    controls.forEach(control => {
      if (control.invalid) {
        control.markAsTouched();
        isValid = false;
      } else {
        control.markAsUntouched();
      }
    });
  
    return isValid;
  }

  resetForm(): void {
      this.dataCadastro.reset();
      this.idCategoria.reset();
      this.descricao.reset();
      this.valor.reset();
      this.pagoEm.reset();
      this.codStatus.reset();
  }
}
