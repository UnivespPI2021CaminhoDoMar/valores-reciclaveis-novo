import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestacao } from '../model/Prestacao'
import { PrestacaoService } from '../service/prestacao.service'

@Component({
  selector: 'app-valores-descricao',
  templateUrl: './valores-descricao.component.html',
  styleUrls: ['./valores-descricao.component.css']
})
export class ValoresDescricaoComponent implements OnInit {

  listaPrestacoes: Prestacao;

  constructor(private prestacoesService: PrestacaoService, private router: Router) { }

  ngOnInit(): void {
    this.findAllPrestacoes();
  }
  
  findAllPrestacoes() {
    this.prestacoesService.getAllPrestacoes().subscribe((resp: Prestacao)=>{
      console.log(resp);
      this.listaPrestacoes = resp;
  });
  }
}
