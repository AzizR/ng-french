import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { WordDetailComponent } from './pages/word-detail/word-detail.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dictionary/:id', component: WordDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
