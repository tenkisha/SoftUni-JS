function toggle() {
    
  const button = document.querySelector('.button')
  const text = document.querySelector('#extra')

  if(button.textContent === 'More'){
      button.textContent = 'Less'
      text.style.display = 'block'
  }else{
      button.textContent = 'More'
      text.style.display = 'none'
  }


  console.log(text)

}