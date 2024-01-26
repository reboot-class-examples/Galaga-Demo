function Bullet(x, y, parent, array){
  var self = this
  this.x = x
  this.y = y
  this.width = 20
  this.height = 20
  this.sprite = document.createElement('div')
  this.direction = -1
  this.speed = 5

  this.insertBullet = function () {
    this.sprite.setAttribute('class', 'bullet')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.removeBullet = function() {
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

    if (self.y <= 0) {
      self.removeBullet()
    }
  }

  this.checkCollision = function() {
    if ( 
          this.x < player.x + player.width &&
          this.y < player.y + player.height &&
          this.x + this.width > player.x &&
          this.y+ this.height > player.y
        ) {
          player.isDead = true
        }
  }

  this.timerId = setInterval(this.move, 50)
}

export { Bullet }