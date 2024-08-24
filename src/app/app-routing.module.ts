import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';

const routes: Routes = [
  { path: '', component: BlankComponent, 
    children: [
      { path: 'blank-depois-mudar-para-home', component: BlankComponent },
      // { path: 'list', component: ListComponent },
      // { path: 'form', component: FormComponent },
      // { path: 'profile/:id', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
