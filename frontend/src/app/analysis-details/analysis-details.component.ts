import {Component, OnInit} from '@angular/core';
import {TerroristAttack} from '../model/terrorist-attack';
import {RichSnippet} from '../model/rich-snippet';
import {WebService} from '../web.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.css']
})
export class AnalysisDetailsComponent implements OnInit {
  showDetails = false;
  attacks: TerroristAttack[];
  richSnippets: RichSnippet[];
  terroristAttack: TerroristAttack;
  eventCode: number;

  constructor(private web: WebService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(code => {
      this.terroristAttack = undefined;
      this.eventCode = +code['id'];
      this.showDetails = false;
      this.web.getTerroristAttacksByCategory(this.eventCode).subscribe(attacks => {
          this.attacks = attacks;
          this.createRichSnippetForEachAttack();
        },
        error2 => console.log(error2));
    }, error2 => console.log(error2));
  }

  showEventDetails(attack: TerroristAttack) {
    this.eventCode = undefined;
    this.terroristAttack = attack;
    this.showDetails = true;
    // TODO: check if .date and all the others exist... for future: send the attackID only and make this check in back-end
    this.web.getRelatedTerroristAttacks(attack.countryCode, this.terroristAttack.eventCode, this.terroristAttack.date).subscribe(attacks => {
      this.attacks = attacks;
      this.createRichSnippetForEachAttack();
    }, error2 => console.log(error2));
  }

  createRichSnippetForEachAttack() {
    this.richSnippets = [];
    for (let i = 0; i < this.attacks.length; i++) {
      this.web.getMetaDataFromURL(this.attacks[i].urls).subscribe(response => {
        this.createRichSnippet(response, this.attacks[i]);
      }, error2 => console.log(error2));
    }
  }

  createRichSnippet(response, attack: TerroristAttack) {
    if (response.url) {
      const url = response.url.substring(0, 4) !== 'http' ? 'https://' + response.url : response.url;
      let title: string = response.title != null ? response.title : response.url;
      if (title.split(' ').length > 6) {
        title = title.split(' ').slice(0, 6).join(' ') + '...';
      }
      const image = response.image != null ? response.image : '../../assets/img/logo.png';
      this.richSnippets.push(new RichSnippet(title, image, url, attack));
    }
  }
}
