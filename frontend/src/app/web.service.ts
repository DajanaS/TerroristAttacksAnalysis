import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WebService {
  api = 'http://localhost:8080/terrorist-attacks';
  private eventCodeChangedSource = new Subject<number>();
  eventCodeChanged$ = this.eventCodeChangedSource.asObservable();

  changeEventCode(eventCode: number) {
    this.eventCodeChangedSource.next(eventCode);
  }

  constructor(private http: HttpClient) {
  }

  getMetaDataFromURL(url) {
    return this.http.get('https://metadata-website.herokuapp.com/Fetch?url=' + url);
  }

  getCategories(): Observable<Object> {
    return this.http.get<Object>(this.api + '/categories');
  }
}
