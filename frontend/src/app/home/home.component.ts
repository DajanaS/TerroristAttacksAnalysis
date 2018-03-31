import {Component} from '@angular/core';
import {WebService} from '../web.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventNames: Object;
  keys;

  lat = 51.678418;
  lng = 7.809007;

  constructor(private web: WebService, private router: Router) {
    this.initializeEventNames();
  }

  initializeEventNames() {
    this.web.getDistinctCategories().subscribe(map => {
      this.eventNames = map;
      this.keys = Object.keys(this.eventNames);
    });
  }

  showAnalysisDetails(eventCode) {
    this.router.navigate(['/category/' + eventCode]);
  }
}
