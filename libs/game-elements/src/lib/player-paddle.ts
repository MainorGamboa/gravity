import * as Phaser from 'phaser';

export class Paddle extends Phaser.Physics.Matter.Image {
  constructor(
    world: Phaser.Physics.Matter.World,
    x: number,
    y: number,
    texture: string,
    config?: Phaser.Types.Physics.Matter.MatterBodyConfig
  ) {
    super(world, x, y, texture, undefined, config);

    world.scene.add.existing(this);
  }

  update({ leftKey, rightKey }) {
    const speed = 10;
    if (leftKey?.isDown) {
      this.x -= speed;
    } else if (rightKey?.isDown) {
      this.x += speed;
    }
  }
}
