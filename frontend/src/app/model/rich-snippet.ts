import {TerroristAttack} from './terrorist-attack';

export class RichSnippet {
  title: string;
  img: string;
  url: string;
  attack: TerroristAttack;

  constructor(title, img, url, attack) {
    this.title = title;
    this.img = img;
    this.url = url;
    this.attack = attack;
  }
}
