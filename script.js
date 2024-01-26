// INSERTAR AUDIO
// var nombreVariable = new Audio('ruta del audio')
// Por ejemplo:
// var shoot = new Audio ('assets/sounds/shoot.mp3)
// Para reproducirlo:
// shoot.play()

import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { Bullet } from './bullet.js'

var board = document.querySelector('#board')
var player = new Player(220, 750, board)
var playerId = null
var spawnId = null
var enemies = [] // Array donde almacenar la información de todos los enemigos en pantalla

function gameStart() {
  player.insertPlayer() //Insertamos el div que representa el player en el DOM
  playerId = setInterval(playerMovement, 50) // Comprobamos el movimiento del jugador cada 50 mseg
  spawnId = setInterval(createEnemy,3000) //Creamos un nuevo enemigo cada 3seg
}

function createEnemy() {
  var coord = Math.floor(Math.random() * 10) * 50 // Generamos una coordenada horizontal aleatoria, en intervalos de 50px
  var enemy = new Enemy(coord, 0, board, player, enemies)
  enemy.insertEnemy() // Insertamos el enemigo en el DOM
  enemies.push(enemy) // Insertamos el enemigo creado en el array de la línea 16
}

function playerMovement() {
  if (!player.isDead) {
    player.move() // Función que se encarga de actualizar la posición del jugador en el DOM
  } else { //Si player.isDead === true, paramos el juego
    // Eliminamos todos los timerId para parar todos los procesos abiertos
    clearInterval(playerId) // Paramos el movimiento del jugador
    clearInterval(spawnId) // Paramos la generación de enemigos
    enemies.forEach(function(enemy){  // Recorremos el array de enemigos y vamos parando su movimiento uno a uno
      clearInterval(enemy.timerId)
    })
    window.alert('Game Over')
    // Aquí podríamos resetear los valores para una nueva partida
  }
}

window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'a':
      player.direction = -1 // Moverse a la izquierda significa reducir el valor de 'x'
      break
    case 'd':
      player.direction = 1 // Moverse a la derecha significa aumentar el valor de 'x'
      break
    case ' ':
      var bullet = new Bullet(player.x + player.width/2 - 10, player.y - 20, board, enemies) // Creamos una bala usando las coordenadas del jugador
      bullet.insertBullet() // Insertamos la bala en el DOM
      break
  }
})

window.addEventListener('keyup', function() {
  player.direction = 0 //Al levantar la tecla correspondiente, dejamos de movernos
})

gameStart() // Arrancamos el juego