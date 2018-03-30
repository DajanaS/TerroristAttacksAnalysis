import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AnalysisDetailsComponent} from './analysis-details/analysis-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category/:id', component: AnalysisDetailsComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
