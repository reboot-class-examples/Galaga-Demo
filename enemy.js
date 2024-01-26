function Enemy(x, y, parent, player){
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

  this.removeEnemy = function() {
    parent.removeChild(this.sprite)
    clearInterval(this.timerId)
  }

  this.move = function () {
    self.checkCollision()
    var newY = self.y + self.speed * self.direction
    if (newY >= 0 && newY <= 750) {
      self.y = newY
      self.sprite.style.top = self.y + 'px'
    }

    if (self.y >= 750) {
      self.removeEnemy()
    }
  }

  this.checkCollision = function() {
    if ( this.x < player.x + player.width &&
        this.y < player.y + player.height &&
        this.x + this.width > player.x &&
        this.y+ this.height > player.y) 
      {
    window.alert('Game Over')
  }
  }

  this.timerId = setInterval(this.move, 50)
}

export { Enemy }