import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlankComponent } from './components/blank/blank.component';
import { HomeComponent } from './components/home/home.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CadastrarTarefasComponent } from './components/cadastrar-tarefas/cadastrar-tarefas.component';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { ListLancamentosComponent } from './components/list-lancamentos/list-lancamentos.component';
import { ListReceitasComponent } from './components/list-receitas/list-receitas.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './components/alerta/alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    BlankComponent,
    HomeComponent,
    TarefasComponent,
    PageHeaderComponent,
    CadastrarTarefasComponent,
    LancamentosComponent,
    ListLancamentosComponent,
    ListReceitasComponent,
    CategoriaComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,               // Se estiver usando template-driven forms
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
