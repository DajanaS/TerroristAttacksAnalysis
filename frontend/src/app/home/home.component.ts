import {Component} from '@angular/core';
import {WebService} from '../web.service';
import {Router} from '@angular/router';
import {TerroristAttack} from '../model/terrorist-attack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventNames: Object;
  keys;
  yesterdayAttacks: TerroristAttack[];

  lat = 42.004270;
  lng = 21.409602;

  constructor(private web: WebService, private router: Router) {
    this.initializeEventNames();
    this.web.getTerroristAttacksFromYesterday().subscribe(attacks => {
      this.yesterdayAttacks = attacks;
    });
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
