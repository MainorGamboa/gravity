import * as Phaser from 'phaser';

export class Ball extends Phaser.Physics.Matter.Image {
  constructor(
    currentScene: Phaser.Scene,
    x: number,
    y: number,
    texture: string
  ) {
    super(currentScene.matter.world, x, y, texture);

    this.setScale(1);
    this.setCircle(10);
    this.setFriction(0.005);
    this.setBounce(1);
    currentScene.matter.world.scene.add.existing(this);
  }
}
