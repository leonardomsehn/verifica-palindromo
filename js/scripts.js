// seletores

const input = document.querySelector('#palindromo-input')
const resultado = document.querySelector('h3')


// funções

//adiciona a palavra
function handleKeyUp(e) {
  if (e.key === 'Enter') {
    const palavra = input.value;
    if (inverter(palavra)) {
      resultado.innerHTML = `${palavra} é um palíndromo`;
      resultado.style.color = 'green';
    } else {
      resultado.innerHTML = `${palavra} não é um palíndromo`;
      resultado.style.color = 'red';
    }
  }
}

//inverte a string
function inverter(string) {
  let palavraInvertida = string.split("").reverse().join("");
  return palavraInvertida === string;
}


// eventos
input.addEventListener('keyup', handleKeyUp);
