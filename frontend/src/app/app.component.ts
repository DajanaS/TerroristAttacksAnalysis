import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Terrorist Attacks Analysis';

  showAnalysisDetails($event) {
    const id = $event.target.value;
    // emit the selected value
  }
}
