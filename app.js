function inverterNumero() {
  let numero = document.querySelector('#input')
  let tagResultado = document.querySelector('#resultado')
  let numeroInvertido = numero.value.toString().split('').reverse().join('')
  let resultado = document.createTextNode(`${numeroInvertido} - `)
  tagResultado.appendChild(resultado)
  numero.value = null
}