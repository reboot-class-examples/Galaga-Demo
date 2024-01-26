import { Player } from './player.js'
import { Enemy } from './enemy.js'

var board = document.querySelector('#board')
var player = new Player(220, 750, board)
var playerId = null
var spawnId = null
var enemies = []

function gameStart() {
  player.insertPlayer()
  playerId = setInterval(playerMovement, 50)
  spawnId = setInterval(createEnemy,3000)
}

function createEnemy() {
  var coord = Math.floor(Math.random() * 10) * 50
  var enemy = new Enemy(coord, 0, board, player, enemies)
  enemy.insertEnemy()
  enemies.push(enemy)
}

function playerMovement() {
  if (!player.isDead) {
    player.move()
  } else {
    clearInterval(playerId)
    clearInterval(spawnId)
    enemies.forEach(function(enemy){
      clearInterval(enemy.timerId)
    })
    window.alert('Game Over')
  }
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