import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFilmsComponent } from './form-films/form-films.component';
import { AlunoComponent } from './aluno/aluno.component';
import { TurmaComponent } from './turma/turma.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  { path: 'professor', component: ProfessorComponent},
  { path: 'aluno', component: AlunoComponent},
  { path: 'turma', component: TurmaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
