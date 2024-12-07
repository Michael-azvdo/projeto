function toggleMode() {
    const html = document.documentElement //pegando o html
    html.classList.toggle("light") //faz a troca das classes

     //pegar a tag img
     const img = document.querySelector("#profile img") //é o mesmo seletor css
    
     //substituir a imagem
    if (html.classList.contains('light')) {
         
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    
    } else {
      
        //se tiver sem light mode,manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png")
    }
}
