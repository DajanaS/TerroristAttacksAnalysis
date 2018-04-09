import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TerroristAttack} from './model/terrorist-attack';
import {DatePipe} from '@angular/common';

@Injectable()
export class WebService {
  api = 'http://localhost:8080/terrorist-attacks';

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getDistinctCategories(): Observable<Object> {
    return this.http.get<Object>(this.api + '/categories');
  }

  getTerroristAttacksByCategory(eventCode: number): Observable<TerroristAttack[]> {
    return this.http.get<TerroristAttack[]>(this.api + '/' + eventCode);
  }

  getRelatedTerroristAttacks(countryCode, eventCode, dateAfter: Date): Observable<TerroristAttack[]> {
    return this.http.get<TerroristAttack[]>(this.api + '/country/' + countryCode + '/from/' + eventCode + '/date/' + this.datePipe.transform(dateAfter, 'yyyy-MM-dd'));
  }

  getMetaDataFromURL(url) {
    return this.http.post(this.api + '/metadata', url);
  }

  getTerroristAttacksFromYesterday(): Observable<TerroristAttack[]> {
    return this.http.get<TerroristAttack[]>(this.api + '/yesterday');
  }
}
