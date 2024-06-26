window.addEventListener('load', function () {

  const cartToggleButton = document.getElementById("cartToggle")
  const cartContainer = document.getElementById("cartContainer")
  const iconClose = document.getElementById("icon-close")
  
  const toggleCart = (event) => {
    if (cartContainer.style.display == 'none') {
      cartContainer.style.display = 'block'
    } else {
      cartContainer.style.display = 'none'
    }
  }

  cartToggleButton.addEventListener("click", toggleCart);
  iconClose.addEventListener("click", toggleCart);
});


// o toggleCart vai abrir e fechar porque eu criei uma função para isso acontecer 
