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
    console.log('aqui');
    this.getVersao();
  }

  getVersao() {
    this.dominiosService.getVersao().subscribe(
      response => {
        this.versao = response;
        console.log('Versão recebida:', response);
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
}

}
