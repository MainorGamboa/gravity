import * as Phaser from 'phaser';

export class Paddle extends Phaser.Physics.Matter.Image {
  currentScene: Phaser.Scene;
  constructor(
    currentScene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    config?: Phaser.Types.Physics.Matter.MatterBodyConfig
  ) {
    super(currentScene.matter.world, x, y, texture, undefined, config);

    currentScene.matter.world.scene.add.existing(this);
    this.currentScene = currentScene;
  }

  update() {
    console.log('executing')
    const leftKey = this.currentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    const rightKey = this.currentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );

    const speed = 10;
    if (leftKey?.isDown) {
      this.x -= speed;
    } else if (rightKey?.isDown) {
      this.x += speed;
    }
  }
}
