import { Component, OnInit } from '@angular/core';
import { DominiosService } from 'src/app/service/dominios.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  versao: string = '';

  constructor(private dominiosService: DominiosService) { }

  ngOnInit(): void {
    this.getVersao();
  }

  getVersao() {
    this.dominiosService.getVersao().subscribe(
      response => {
        this.versao = response;
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
  }

}
