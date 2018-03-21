import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AnalysisDetailsComponent} from './analysis-details/analysis-details.component';
import {WebService} from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
