function Player(x, y){
  var self = this
  this.x = x
  this.y = y
  this.sprite = document.querySelector('#player')
  this.direction = 0

  this.move = function () {
    self.x += 5 * self.direction
    self.sprite.style.left = self.x + 'px'
  }
}

export { Player }