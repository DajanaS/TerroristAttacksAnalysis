import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {
  }

  getResults() {
    const query = 'master+programs+computer+science';
    return this.http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAaRFYbhMsPMeqmNFyu_doNRTrmsA13RiE&cx=017576662512468239146:omuauf_lfve&q=' + query);
  }

  getMetaDataFromURL(url) {
    return this.http.get('https://metadata-website.herokuapp.com/Fetch?url=' + url);
  }
}
