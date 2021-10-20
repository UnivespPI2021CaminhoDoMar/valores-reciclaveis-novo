import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalhes } from '../model/Detalhes'
import { OverviewService } from '../service/overview.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaOverview: Detalhes[];

  constructor(private overviewService: OverviewService, private router: Router) { }

  ngOnInit(): void {
    this.findOverview();
  }

  findOverview() {
    this.overviewService.getOverview().subscribe((resp: Detalhes[])=>{
      console.log(resp);
      this.listaOverview = resp;
    }, err => {
      alert(`Erro cod: ${err.message}`);
    });
  }


}
