import './app.element.scss';
import startGame from './game';

export class AppElement extends HTMLElement {
  constructor() {
    super();
    startGame();
  }
}

customElements.define('gravity-control-games-root', AppElement);
