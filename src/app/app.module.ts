import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AvisComponent } from './components/avis/avis.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { ListeColleguesComponent } from './components/liste-collegues/liste-collegues.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './components/historique-votes/historique-votes.component';
import { NouveauCollegueTemplateFormComponent } from './components/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
