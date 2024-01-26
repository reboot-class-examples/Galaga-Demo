function Player(x, y){
  var self = this
  this.x = x
  this.y = y
  this.sprite = document.querySelector('#player')
  this.direction = 0
  this.speed = 5

  this.move = function () {
    var newX = self.x + self.speed * self.direction
    if (newX >= 0 && newX <= 550) {
      self.x = newX
      self.sprite.style.left = self.x + 'px'
    }
  }
}

export { Player }