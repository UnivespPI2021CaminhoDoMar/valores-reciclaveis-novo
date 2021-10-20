import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ValoresDescricaoComponent } from './valores-descricao/valores-descricao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PostarDadosComponent } from './postar-dados/postar-dados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValoresDescricaoComponent,
    MenuComponent,
    PostarDadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'valores', component: ValoresDescricaoComponent },
      { path: 'incluir-dados', component: PostarDadosComponent },
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
