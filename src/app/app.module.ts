import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './pages/main/main.component';
import { WordDetailComponent } from './pages/word-detail/word-detail.component';
import { TableComponent } from './table/table.component';
import { SoundButtonComponent } from './sound-button/sound-button.component';

@NgModule({
  declarations: [AppComponent, CardComponent, MainComponent, WordDetailComponent, TableComponent, SoundButtonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
