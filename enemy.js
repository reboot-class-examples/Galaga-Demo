function Enemy(x, y, parent){
  var self = this
  this.x = x
  this.y = y
  this.sprite = document.createElement('div')
  this.direction = 1
  this.speed = 5

  this.insertEnemy = function () {
    this.sprite.setAttribute('class', 'enemy')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    var newY = self.y + self.speed * self.direction
    if (newY >= 0 && newY <= 750) {
      self.y = newY
      self.sprite.style.top = self.y + 'px'
    }
  }
}

export { Enemy }