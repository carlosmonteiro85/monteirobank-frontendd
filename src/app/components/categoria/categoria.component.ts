import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  descricao = new FormControl('', [Validators.required]);  // Usando FormControl
  tipoCategoria = new FormControl(null, [Validators.required]); // Outro FormControl

  alerta = new AlertaComponent();
  constructor(private categoriaService: CategoriaService) {}

  resetForm() {
    this.descricao.reset();
    this.descricaoValue = '';
    this.tipoCategoria.reset();
    this.tipoCategoria.setValue(this.defaultTipoCategoria);
  }

    create() {
    if (this.descricao.valid && this.tipoCategoria.valid) {
      const novaCategoria = new Categoria(
        null, 
        this.descricao.value,
        this.tipoCategoria.value
      );

      this.categoriaService.create(novaCategoria).subscribe(
        response => {
          this.resetForm();
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

  descricaoValue: string = '';

  onDescricaoChange(value: string) {
    if (value != null) { 
      const upperCaseValue = value.toUpperCase();
      
      if (this.descricaoValue !== upperCaseValue) {
        this.descricaoValue = upperCaseValue;
        this.descricao.setValue(this.descricaoValue);
      }
    }
  }

  defaultTipoCategoria: number = 0;

  ngOnInit(): void {
    this.tipoCategoria.setValue(this.defaultTipoCategoria); 
  }
}