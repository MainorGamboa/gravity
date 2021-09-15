import * as Phaser from 'phaser';
import { Paddle, Ball } from '@gravity-control-games/game-elements';

export default class Word1 extends Phaser.Scene {
  paddle: Paddle;
  width = 800;
  height = 600;
  constructor() {
    super({ key: 'Word-1-directional-gravity' });
  }

  preload() {
    this.load.image('ball', 'assets/sprites/ball.png');
    this.load.image('paddle', 'assets/sprites/paddle.png');
  }

  create() {
    this.matter.world.setBounds(
      0 + 10,
      0,
      this.width,
      this.height - 10,
      32,
      true,
      true,
      false,
      true
    );

    //  Add in a stack of balls

    this.paddle = new Paddle(this, this.width * 0.5, this.height - 6, 'paddle', {
      // isStatic: true,
      chamfer: {
        radius: 15,
      },
    });

    for (let i = 0; i < 64; i++) {
      new Ball(
        this,
        Phaser.Math.Between(100, 700),
        Phaser.Math.Between(-600, 0),
        'ball'
      );
    }
  }

  update() {
    this.paddle.update();
  }
}
