import Word1 from './word-1';

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
    scene: [Word1]
  };

function startGame() {
    const game = new Phaser.Game(config);

    return game
    
}

  export default startGame;