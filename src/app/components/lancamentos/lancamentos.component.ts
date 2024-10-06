import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { DominiosService } from 'src/app/service/dominios.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {
  categorias: Categoria[] = []; // Propriedade para armazenar categorias
  selectedCategoria: number | null = null; // Para armazenar a categoria selecionada
  tipoLancamento: number | null = null;

  constructor(private dominiosService: DominiosService) { }

  defaulTipoLancamento: string = "0";

  ngOnInit(): void {
    // this.tipoLancamento.  .setValue(this.defaulTipoLancamento); 
  }

  onTipoLancamentoChange(): void {
    if (this.tipoLancamento) {
      this.loadCategorias(this.tipoLancamento); // Chama o método para carregar categorias
    } else {
      this.categorias = []; // Reseta as categorias se nenhum tipo for selecionado
    }
  }

  loadCategorias(tipoCategoria: number): void {
    this.dominiosService.getCategorias(tipoCategoria).subscribe(
      (response) => {
        this.categorias = response; // Armazena as categorias retornadas
        this.selectedCategoria = null; // Reseta a categoria selecionada
      },
      (error) => {
        console.error('Erro ao carregar categorias', error);
        this.categorias = []; // Reseta as categorias em caso de erro
      }
    );
  }

}
