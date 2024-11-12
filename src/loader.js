let loader = document.getElementById('loader')
let weatherCard = document.getElementById('weatherCard')

class Loader {
  open () {
    loader.style.display = 'block'
    weatherCard.style.display = 'none'
  }

  close () {
    loader.style.display = 'none'
    weatherCard.style.display = 'block'
  }
}

export default new Loader()