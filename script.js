import { Player } from './player.js'
import { Enemy } from './enemy.js'

var board = document.querySelector('#board')
var player = new Player(275, 750, board)

function gameStart() {
  player.insertPlayer()
  var playerId = setInterval(player.move, 50)
  var enemyId = setInterval(createEnemy,3000)
}

function createEnemy() {
  var enemy = new Enemy(275, 0, board)
  enemy.insertEnemy()
}

window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'a':
      player.direction = -1
      break
    case 'd':
      player.direction = 1
      break
  }
})

window.addEventListener('keyup', function() {
  player.direction = 0
})

gameStart()