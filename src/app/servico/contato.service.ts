import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  urlAPI = "https://jsonplaceholder.typicode.com/users";
  constructor(
    private httpCliente: HttpClient
  ) { }

  listar(){
    return this.httpCliente.get<any[]>(this.urlAPI);
  }
}
