import * as Phaser from 'phaser';
export class Ball extends Phaser.Physics.Arcade.Sprite {
  body: Phaser.Physics.Arcade.Body;

  constructor(
    currentScene: Phaser.Scene,
    x: number,
    y: number,
    texture: string
  ) {
    super(currentScene, x, y, texture);

    console.log('this', this);
    this.setScale(1);
    console.log('this', this);

    // this.body.setCircle(10);
    // this.setCircle(10);
    // this.setFriction(0.005);
    // this.setBounce(1);
    // this.restitution = 0.6;
    // this.frictionAir = 0;
    // this.mass: 0.1;
    // this.setGravity(3, )

    currentScene.physics.world.enableBody(this);
    this.setCollideWorldBounds();
    // this.body.setCircle(10);
    // this.setCircle(10);
    this.setFriction(1);
    // this.setGravityX(10);
    // this.setGravityY(1000);

    this.setGravity(50, 50)
    

    this.setBounce(0.5);
    currentScene.physics.world.scene.add.existing(this);
  }
}
