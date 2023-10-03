function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a img
  const img = document.querySelector("#profile img")


  //substituir a img
if (html.classList.contains('light')) {
}
//se estiver light mode, adicionar img light
if (html.classList.contains('light')) {

  img.setAttribute("src", "./assets/avatar-light.png")
  } else {
//se tiver sem light mode, manter img original
img.setAttribute("src", "./assets/avatar.png")
  }

if (html.classList.contains('light')) {
  img.setAttribute("alt", "Homem fazendo careta")
} else {
  img.setAttribute("alt", "Logomarca do produtor musical WAYYS")
}




  
}

  /*CONDIÇÃO: SE CONTEM 'LIGHT', REMOVE 'LIGHT', SE NÃO, ADICIONAR 'LIGHT'*/
  // html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  // }

  // MANEIRA DIRETA, FUNCIONALIDADE BOTÃO, TOGGLE::



