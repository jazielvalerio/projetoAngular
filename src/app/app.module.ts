import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavFavsComponent } from './nav-favs/nav-favs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormFilmsComponent } from './form-films/form-films.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';
import { TurmaComponent } from './turma/turma.component';
import { CommonModule } from '@angular/common';
import { TableProfessorComponent } from './table-professor/table-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFavsComponent,
    FormFilmsComponent,
    ProfessorComponent,
    AlunoComponent,
    TurmaComponent,
    TableProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
