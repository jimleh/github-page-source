import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { Lexicon2017LMSComponent } from './lexicon2017-lms/lexicon2017-lms.component';
import { Lexicon2017MiniProjectComponent } from './lexicon2017-mini-project/lexicon2017-mini-project.component';
import { Lexicon2017Component } from './lexicon2017/lexicon2017.component';
import { SentenceBuilderComponent } from './sentence-builder/sentence-builder.component';
import { PunctuationComponent } from './punctuation/punctuation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/sentence', component: SentenceBuilderComponent },
  { path: 'projects/punctuation', component: PunctuationComponent },
  { path: 'projects/lexicon2017', component: Lexicon2017Component },
  { path: 'projects/lexicon2017/lms', component: Lexicon2017LMSComponent },
  { path: 'projects/lexicon2017/miniproject', component: Lexicon2017MiniProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
