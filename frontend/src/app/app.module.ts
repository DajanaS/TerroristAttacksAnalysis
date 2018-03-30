import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AnalysisDetailsComponent} from './analysis-details/analysis-details.component';
import {WebService} from './web.service';
import {DatePipe} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WebService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
