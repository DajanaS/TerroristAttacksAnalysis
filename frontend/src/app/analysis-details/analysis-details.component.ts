import {Component, OnInit} from '@angular/core';
import {TerroristAttack} from '../model/terrorist-attack';
import {RichSnippet} from '../model/rich-snippet';
import {WebService} from '../web.service';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.css']
})
export class AnalysisDetailsComponent implements OnInit {
  terroristAttack: TerroristAttack;
  richSnippets: RichSnippet[] = [];
  urls = [
    'https://medium.com/@unakravets/the-sad-state-of-entitled-web-developers-e4f314764dd',
    'http://frontendnewsletter.com/issues/1#start',
    'https://groups.google.com/forum/#!topic/v8-users/PInzACvS5I4',
    'https://www.youtube.com/watch?v=9kJVYpOqcVU',
  ];

  constructor(private webService: WebService) {
  }

  ngOnInit() {
    this.terroristAttack = new TerroristAttack();
    this.terroristAttack.country = '../assets/img/graph.jpg';
    // listen on event change and update the terroristAttack
    this.webService.getResults().subscribe(response => {
      this.hndlr(response);
    });
  }

  hndlr(response) {
    for (let i = 0; i < response.items.length; i++) {
      const item = response.items[i];
      let url = item.formattedUrl;
      if (url.substring(0, 4) !== 'http') {
        url = 'https://' + item.formattedUrl;
      }
      if (item.pagemap != null && item.pagemap.cse_image != null) {
        this.richSnippets.push(new RichSnippet(item.title, item.pagemap.cse_image[0].src, url));
      } else if (item.pagemap != null && item.pagemap.cse_thumbnail != null) {
        this.richSnippets.push(new RichSnippet(item.title, item.pagemap.cse_thumbnail[0].src, url));
      } else {
        this.richSnippets.push(new RichSnippet(item.title, '../../assets/img/logo.png', url));
      }
    }
  }
}
