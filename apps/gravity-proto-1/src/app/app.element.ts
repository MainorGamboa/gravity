import * as Phaser from 'phaser';
import './app.element.scss';
import { Paddle } from '@gravity-control-games/game-elements';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'Gravity control game proto 1';
    this.innerHTML = ``;
  }

  constructor() {
    super();
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: '#1d1d1d',
      parent: 'phaser-example',
      physics: {
        default: 'matter',
        matter: {
          enableSleeping: true,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);
  }
}

function preload() {
  this.load.image('ball', 'assets/sprites/ball.png');
  this.load.image('paddle', 'assets/sprites/paddle.png');
}

function create() {
  const width = 800;
  const height = 600;
  this.matter.world.setBounds(0, 0, width, height, 32, true, true, false, true);

  //  Add in a stack of balls

  this.paddle = new Paddle(
    this.matter.world,
    width * 0.5,
    height * 0.9,
    'paddle',
    {
      // isStatic: true,
      chamfer: {
        radius: 15,
      },
    }
  );

  for (let i = 0; i < 64; i++) {
    const ball = this.matter.add.image(
      Phaser.Math.Between(100, 700),
      Phaser.Math.Between(-600, 0),
      'ball'
    );
    ball.setScale(1);
    ball.setCircle();
    ball.setFriction(0.005);
    ball.setBounce(1);
  }
}

function update() {
const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)


  this.paddle.update({ leftKey, rightKey })
}

customElements.define('gravity-control-games-root', AppElement);
