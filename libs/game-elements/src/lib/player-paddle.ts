import * as Phaser from 'phaser';

enum directionEnum {
  DOWN = 'down',
  UP = 'up',
  RIGHT = 'right',
  LEFT = 'left',
}
export class Paddle extends Phaser.Physics.Matter.Image {
  currentScene: Phaser.Scene;
  direction: directionEnum = directionEnum.DOWN;
  constructor(
    currentScene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    config?: Phaser.Types.Physics.Matter.MatterBodyConfig
  ) {
    super(currentScene.matter.world, x, y, texture, undefined, config);

    this.setSensor(true);
    this.setIgnoreGravity(true);
    currentScene.matter.world.scene.add.existing(this);
    this.currentScene = currentScene;
  }

  update() {
    const leftKey = this.currentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    const rightKey = this.currentScene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );

    const speed = 10;
    if (leftKey?.isDown) {
      if (this.direction === directionEnum.DOWN) {
        if (this.x === 0) {
          this.setRotation(1.5708);
          this.x = 5;
          this.y = 560;
          this.direction = directionEnum.LEFT;
        } else {
          this.x -= speed;
        }
      } else if (this.direction === directionEnum.LEFT) {
        this.y -= speed;
      }
    } else if (rightKey?.isDown) {
      if (this.direction === directionEnum.LEFT) {
        this.y += speed;
      } else {
        this.x += speed;
      }
    }
  }
}
