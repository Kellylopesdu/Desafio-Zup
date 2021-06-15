const numeroMaximoDePersonagens = 670;

const primeiraImagem = document.getElementById("primeiraimagem");
const nomePrimeiroPersonagem = document.getElementById("nomePrimeiroPersonagem");

const segundaimagem = document.getElementById("segundaimagem");
const nomeSegundoPersonagem = document.getElementById("nomeSegundoPersonagem");

const terceiraimagem = document.getElementById("terceiraimagem");
const nomeTerceiroPersonagem = document.getElementById("nomeTerceiroPersonagem");

const quartaimagem = document.getElementById("quartaimagem");
const nomeQuartoPersonagem = document.getElementById("nomeQuartoPersonagem");

var valoresAleatorios = [];

gerarValoresAleatorios = () => {

	while ( valoresAleatorios.length < 4) {
		var valorAleatorio = gerarValoraleatorio();

    	if (valoresAleatorios.indexOf(valorAleatorio) === -1) {
    		valoresAleatorios.push(valorAleatorio)
    	}
	}
	console.log(valoresAleatorios);
}

gerarValoraleatorio = () => {
  return Math.floor(Math.random() * numeroMaximoDePersonagens) + 1
}

pegarPersonagem = (numeroAleatorio) => {   

    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
         method: 'GET', 
         headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }           
    });    
}

tratarPrimeiraImagem = (numeroAleatorio) => {

	let fetchRes = pegarPersonagem(numeroAleatorio);
	fetchRes.then((response) => response.json()).then((data) => {
        primeiraImagem.src = data.image;
        primeiraImagem.alt = data.name;
        nomePrimeiroPersonagem.innerHTML = data.name;
    });
 }

tratarSegundaImagem = (numeroAleatorio) => {

	let fetchRes = pegarPersonagem(numeroAleatorio);
	fetchRes.then((response) => response.json()).then((data) => {
        segundaimagem.src = data.image;
        segundaimagem.alt = data.name;
        nomeSegundoPersonagem.innerHTML = data.name;
    });
}

tratarTerceiraImagem = (numeroAleatorio) => {

	let fetchRes = pegarPersonagem(numeroAleatorio);
	fetchRes.then((response) => response.json()).then((data) => {
        terceiraimagem.src = data.image;
        terceiraimagem.alt = data.name;
        nomeTerceiroPersonagem.innerHTML = data.name;
    });
}

tratarQuartaImagem = (numeroAleatorio) => {

	let fetchRes = pegarPersonagem(numeroAleatorio);
	fetchRes.then((response) => response.json()).then((data) => {
        quartaimagem.src = data.image;
        quartaimagem.alt = data.name;
        nomeQuartoPersonagem.innerHTML = data.name;
    });
}

window.onload = function imageOption() {
	gerarValoresAleatorios()
    tratarPrimeiraImagem(valoresAleatorios[0]);
    tratarSegundaImagem(valoresAleatorios[1]);
    tratarTerceiraImagem(valoresAleatorios[2]);
    tratarQuartaImagem(valoresAleatorios[3]);
}
        
 