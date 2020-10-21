import { Component } from '@angular/core';
import {Cliente} from './clientes/clientes.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-databinding';
clientes: Cliente[] = [];
onClienteAdicionado(cliente) {
this.clientes = [...this.clientes, cliente];
}
}
