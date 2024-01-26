function Enemy(x, y, parent, player, array){
  var self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.sprite = document.createElement('div')
  this.direction = 1
  this.speed = 5

  this.insertEnemy = function () {
    this.sprite.setAttribute('class', 'enemy')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.removeEnemy = function(idx) {
    if (this.y >= 750) {
      array.shift() // El enemigo que ha llegado al borde inferior es el que más tiempo lleva en pantalla, por lo que es el primer elemento del array de enemigos. Lo quitamos con la función shift()
    } else {
      array.splice(idx, 1) // Si no ha llegado al borde inferior, eliminamos el elemento en el índice que hemos recibido desde la función 'checkCollision' de la bala que ha colisionado con este enemigo
    }
    parent.removeChild(this.sprite)
    clearInterval(this.timerId)
  }

  this.move = function () {
    self.checkCollision() // Primero comprobamos si hemos colisionado con el jugador
    var newY = self.y + self.speed * self.direction // Movemos el enemigo hacia abajo
    if (newY >= 0 && newY <= 750) {
      self.y = newY
      self.sprite.style.top = self.y + 'px'
    }

    if (self.y >= 750) {
      self.removeEnemy() // Quitamos al enemigo de la pantalla si llega al borde inferior
    }
  }

  this.checkCollision = function() {
    if ( 
          this.x < player.x + player.width &&
          this.y < player.y + player.height &&
          this.x + this.width > player.x &&
          this.y+ this.height > player.y
        ) {
          player.isDead = true // Matamos al jugador en caso de haber colisionado con él
        }
  }

  this.timerId = setInterval(this.move, 50) // Nada más crear el enemigo, creamos un intervalo que se encargará de su movimiento
}

export { Enemy }