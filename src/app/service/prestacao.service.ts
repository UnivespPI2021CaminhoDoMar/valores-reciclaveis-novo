import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Prestacao } from '../model/Prestacao';
import Axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PrestacaoService {
  api: any;
  
  constructor(private http: HttpClient) { 
    this.api = Axios.create({baseURL:'http://localhost:8080'});
  }

  getAllPrestacoes(){
    return this.http.get<Prestacao>("http://localhost:8080/prestacao-contas");
  }

  async postPrestacao(data){
    return this.api.post("http://localhost:8080/prestacao-contas/inserir", data);
  }

}
