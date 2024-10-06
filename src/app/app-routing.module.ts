import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { HomeComponent } from './components/home/home.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { CadastrarTarefasComponent } from './components/cadastrar-tarefas/cadastrar-tarefas.component';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { ListLancamentosComponent } from './components/list-lancamentos/list-lancamentos.component';
import { ListReceitasComponent } from './components/list-receitas/list-receitas.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children: [
      // { path: 'blank-depois-mudar-para-home', component: BlankComponent },
      // { path: 'tarefas', component: TarefasComponent },
      // { path: 'form', component: FormComponent },
      // { path: 'profile/:id', component: ProfileComponent}
    ]
  }, 
  { path: 'blank-depois-mudar-para-home', component: BlankComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: 'form-tarefas', component: CadastrarTarefasComponent },
  { path: 'form-lancamento', component: LancamentosComponent },
  { path: 'tabela-despesas', component: ListLancamentosComponent },
  { path: 'tabela-receitas', component: ListReceitasComponent },
  { path: 'form-categoria', component: CategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
