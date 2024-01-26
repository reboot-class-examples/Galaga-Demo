var board = document.querySelector('#board')


function Player(x, y){
  this.x = x
  this.y = y
  this.sprite = document.querySelector('#player')

  this.move = function (direction) {
    this.x += 10 * direction
    this.sprite.style.left = this.x + 'px'
  }
}

var player = new Player(275, 750)



window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'a':
      player.move(-1)
      break
    case 'd':
      player.move(1)
      break
  }
})