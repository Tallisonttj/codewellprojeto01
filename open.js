
  function clicou(){
    const sandu = document.querySelector('.sanduiche')
    sandu.style.display = 'none'
    const menu = document.querySelector('.menu-open')
    menu.style.display = 'flex'
}
  let botao =document.querySelector('.open')
  botao.addEventListener('click', clicou)

  function fechar(){
    const menu = document.querySelector('.menu-open')
    menu.style.display = 'none'
    const sandu = document.querySelector('.sanduiche')
    sandu.style.display = 'flex'
}
  let closer =document.querySelector('.closer')
  closer.addEventListener('click', fechar)
