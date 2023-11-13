// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

//components
import { AppComponent } from './app.component';
import { AvisComponent } from './components/avis/avis.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { ListeColleguesComponent } from './components/liste-collegues/liste-collegues.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HistoriqueVotesComponent } from './components/historique-votes/historique-votes.component';
import { NouveauCollegueTemplateFormComponent } from './components/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { NouveauCollegueReactiveFormComponent } from './components/nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// pipes
import { ScorePipe } from './pipes/score.pipe';

// directives
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { DetailCollegueComponent } from './components/detail-collegue/detail-collegue.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'form-template', component: NouveauCollegueTemplateFormComponent },
  { path: 'form-reactive', component: NouveauCollegueReactiveFormComponent },
  { path: 'collegue/:id', component: DetailCollegueComponent }
]

@NgModule({
  declarations: [
    //components
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    HistoriqueVotesComponent,
    NouveauCollegueTemplateFormComponent,
    HeaderComponent,
    FooterComponent,
    // pipes
    ScorePipe,
    // directives
    NomPrenomValidatorDirective,
    PseudoValidatorDirective,
    DetailCollegueComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
