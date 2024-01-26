function Player(x, y, parent){
  var self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.sprite = document.createElement('div')
  this.direction = 0
  this.speed = 5

  this.insertPlayer = function () {
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    var newX = self.x + self.speed * self.direction
    if (newX >= 0 && newX <= 550) {
      self.x = newX
      self.sprite.style.left = self.x + 'px'
    }
  }
}

export { Player }