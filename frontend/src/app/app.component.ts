import {Component} from '@angular/core';
import {WebService} from './web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Terrorist Attacks Analysis';
  eventNames: Object;
  keys;

  constructor(private web: WebService) {
    this.initializeEventNames();
  }

  initializeEventNames() {
    this.web.getCategories().subscribe(map => {
      this.eventNames = map;
      this.keys = Object.keys(this.eventNames);
    });
  }

  showAnalysisDetails($event) {
    const event_code = $event.target.value;
    this.web.changeEventCode(event_code);
  }

  getCategories() {
    // povik do web servisot . subscribe (categories == )
  }
}
