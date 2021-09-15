import * as Phaser from 'phaser';
import { Paddle, Ball } from '@gravity-control-games/game-elements';

export default class Word1 extends Phaser.Scene {
  paddle: Paddle;
  constructor() {
    super({ key: 'Word-1-directional-gravity' });
  }

  preload() {
    this.load.image('ball', 'assets/sprites/ball.png');
    this.load.image('paddle', 'assets/sprites/paddle.png');
  }

  create() {
    const width = 800;
    const height = 600;
    this.matter.world.setBounds(
      0,
      0,
      width,
      height,
      32,
      true,
      true,
      false,
      true
    );

    //  Add in a stack of balls

    this.paddle = new Paddle(this, width * 0.5, height * 0.9, 'paddle', {
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
