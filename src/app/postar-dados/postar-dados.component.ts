import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestacao } from '../model/Prestacao';
import { PrestacaoService } from '../service/prestacao.service';

@Component({
  selector: 'app-postar-dados',
  templateUrl: './postar-dados.component.html',
  styleUrls: ['./postar-dados.component.css']
})
export class PostarDadosComponent implements OnInit {
  id: number
  prestacao: Prestacao = new Prestacao(0, '', 0, 0, '')

  categoriasForm = [
  "PAPEL BRANCO",
  "JORNAL E REVISTA",
  "PAPEL MISTO",
  "PAPELÃO",
  "TETRA",
  "PLÁSTICO PEAD BRANCO",
  "PLÁSTICO PEAD COLORIDO",
  "LÁSTICO APARA BRANCA",
  "PLÁSTICO APARA COLORIDA",
  "PLÁSTICO PP BRANCO",
  "PLÁSTICO PP COLORIDO",
  "PET BRANCA",
  "PET VERDE",
  "PET LARANJA",
  "PET AZUL",
  "PET ÓLEO",
  "VIDRO",
  "FERROSO",
  "OUTROS MATERIAIS",
  "PRESTAÇÃO DE SERVIÇOS"]

  zonasForm = ["LESTE", "OESTE", "NORTE", "SUL"]

  constructor(private prestacaoService : PrestacaoService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  async cadastrarPrestacao(data){
    try {
      const response = await this.prestacaoService.postPrestacao(data)
    } catch (error) {
      console.error(error)
    }
    
  }

//funcao submit passando os dados
}
