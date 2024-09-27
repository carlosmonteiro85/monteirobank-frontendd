import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { HomeComponent } from './components/home/home.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { CadastrarTarefasComponent } from './components/cadastrar-tarefas/cadastrar-tarefas.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
