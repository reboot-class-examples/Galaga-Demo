import { Player } from './player.js'

var board = document.querySelector('#board')
var player = new Player(275, 750)


function gameLoop() {
  var playerId = setInterval(player.move, 50)
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

gameLoop()