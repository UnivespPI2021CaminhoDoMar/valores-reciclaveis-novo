import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalhes } from '../model/Detalhes';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http: HttpClient) { }

  getOverview(){
    return this.http.get<Detalhes[]>("http://localhost:8080/prestacao-contas/detalhes")
  }
}
