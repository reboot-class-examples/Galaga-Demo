var board = document.querySelector('#board')
var player = document.querySelector('#player')

window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'a':
      console.log('izq')
      break
    case 'd':
      console.log('der')
      break
  }
})