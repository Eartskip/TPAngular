import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { SpecialiteComponent } from './component/specialite/specialite.component';
import { DateComponent } from './component/date/date.component';
import { EtudiantParisComponent } from './component/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './component/etudiant-hors-paris/etudiant-hors-paris.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';
import { FormulairesComponent } from './component/formulaires/formulaires.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EtudiantComponent,
    SpecialiteComponent,
    DateComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent,
    FormSpecialiteComponent,
    FormEtudiantComponent,
    FormulairesComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'etudiant', component: EtudiantComponent },
      { path: 'specialite', component: SpecialiteComponent },
      { path: 'etudiantsParis', component: EtudiantParisComponent },
      { path: 'etudiantsHorsParis', component: EtudiantHorsParisComponent },
      { path: 'formulaires', component: FormulairesComponent },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
