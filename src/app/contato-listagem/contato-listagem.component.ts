import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../servico/contato.service';

@Component({
  selector: 'app-contato-listagem',
  templateUrl: './contato-listagem.component.html',
  styleUrls: ['./contato-listagem.component.css']
})
export class ContatoListagemComponent implements OnInit {

  contatos = [
    { id: 1, nome: "Antonio carlos", email: "junior.leticia@gmail.com" },
    { id: 2, nome: "Rodrigo dos santos", email: "rodrigo@gmail.com" }
  ];
  constructor(
    private contatoServico: ContatoService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.contatoServico.listar()
    .subscribe(data => this.contatos = data);
  }
}
