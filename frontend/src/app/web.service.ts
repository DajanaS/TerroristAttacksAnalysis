import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {TerroristAttack} from './model/terrorist-attack';

@Injectable()
export class WebService {
  api = 'http://localhost:8080/terrorist-attacks';
  private eventCodeChangedSource = new Subject<number>();
  eventCodeChanged$ = this.eventCodeChangedSource.asObservable();
  app_embed_ly_key = 'bc159c9cdb7d48bdb0238aa465a1f2fc';

  changeEventCode(eventCode: number) {
    this.eventCodeChangedSource.next(eventCode);
  }

  constructor(private http: HttpClient) {
  }

  getMetaDataFromURL(url) {
    return this.http.get('https://api.embedly.com/1/extract?key=' + this.app_embed_ly_key + '&url=' + url);
  }

  getDistinctCategories(): Observable<Object> {
    return this.http.get<Object>(this.api + '/categories');
  }

  getTerroristAttacksByCategory(eventCode: number): Observable<TerroristAttack[]> {
    return this.http.get<TerroristAttack[]>(this.api + '/' + eventCode);
  }

  getTerroristAttacksByCountry(countryCode: string): Observable<TerroristAttack[]> {
    return this.http.get<TerroristAttack[]>(this.api + '/country/' + countryCode);
  }
}
