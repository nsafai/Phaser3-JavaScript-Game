import Phaser from 'phaser';
import { printList, print2DLists, printZeroGrid } from './utils';

// START TESTING UTILS
const list = [1, 4, 6, 9];
printList(list);

const listOfLists = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
print2DLists(listOfLists);
print2DLists(list);

printZeroGrid(8, 6);

// END UTILS

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}
