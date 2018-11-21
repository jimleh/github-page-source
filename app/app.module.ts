import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { Lexicon2017MiniProjectComponent } from './lexicon2017-mini-project/lexicon2017-mini-project.component';
import { Lexicon2017LMSComponent } from './lexicon2017-lms/lexicon2017-lms.component';
import { Lexicon2017Component } from './lexicon2017/lexicon2017.component';
import { SentenceBuilderComponent } from './sentence-builder/sentence-builder.component';
import { PunctuationComponent } from './punctuation/punctuation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ProjectsComponent,
    Lexicon2017MiniProjectComponent,
    Lexicon2017LMSComponent,
    Lexicon2017Component,
    SentenceBuilderComponent,
    PunctuationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
