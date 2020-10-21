import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../clientes/clientes.model';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent {
@Output() clienteAdicionado = new EventEmitter<Cliente>();
nome: string;
fone: string;
email: string;
numero: string;
onAdicionarCLiente() {
const cliente: Cliente = {
  nome: this.nome,
  fone: this.fone,
  email: this.email,
  numero: this.numero,
};
this.clienteAdicionado.emit(cliente);
}
}
