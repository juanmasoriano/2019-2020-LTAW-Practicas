let Alimentacion = document.getElementById('Alimetacion')
let img = document.getElementById('gato')

let img_on = true;

Alimentacion.onclick= () => {
  if (img_on){
    img.style.display="None"
    img_on = false
  }
  else{
    img.style.display = "inline"
    img_on = true
  }
}
