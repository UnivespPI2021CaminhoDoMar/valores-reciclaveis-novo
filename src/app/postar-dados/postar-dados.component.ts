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
    "PAPEL_BRANCO",
    "JORNAL_E_REVISTA",
    "PAPEL_MISTO",
    "PAPELAO",
    "TETRA",
    "PLASTICO_PEAD_BRANCO",
    "PLASTICO_PEAD_COLORIDO",
    "PLASTICO_APARA_BRANCO",
    "PLASTICO_APARA_COLORIDO",
    "PLASTICO_PP_BRANCO",
    "PLASTICO_PP_COLORIDO",
    "PET_BRANCA",
    "PET_VERDE",
    "PET_LARANJA",
    "PET_AZUL",
    "PET_OLEO",
    "VIDRO",
    "FERROSO",
    "OUTROS_MATERIAIS",
    "PRESTACAO_DE_SERVICOS"]

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

}
