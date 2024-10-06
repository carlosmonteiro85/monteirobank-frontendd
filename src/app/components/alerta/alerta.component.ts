import { Component, Input } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {

  @Input() icon: SweetAlertIcon = 'info';
  @Input() text: string = '';

  showAlert() {
    Swal.fire({
      icon: this.icon,
      text: this.text,
      customClass: {
        container: 'my-swal-container',
        popup: 'my-swal-popup',
        title: 'my-swal-title',
        confirmButton: 'my-swal-confirm-button'
      }
    });
  }
}
