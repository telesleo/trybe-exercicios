let botaoLer = document.querySelector('#botaoLer');
let textoPrincipal = document.querySelector('#text');
let input = document.querySelector('#sourceText');
botaoLer.addEventListener('click', gerarTexto)

/*const corCinzaEscuro = 'rgb(37, 37, 37)';
const corCinzaClaro = 'rgb(211, 211, 211)';
const corAzul = 'rgb(25, 36, 56);';
const corBeje = 'rgb(231, 214, 182)';
const corVermelho = 'rgb(44, 20, 20)';
const corAzulClaro = 'rgb(204, 221, 226)';*/

function gerarTexto()
{
    textoPrincipal.innerText = input.value;
}

let botaoTemaEscuro = document.querySelector('.cinzaEscuro');
let botaoTemaClaro = document.querySelector('.cinzaClaro');
let botaoTemaOcean = document.querySelector('.azul');
let botaoTemaRubro = document.querySelector('.vermelho');

botaoTemaEscuro.addEventListener('click', MudarTema);
botaoTemaClaro.addEventListener('click', MudarTema);
botaoTemaOcean.addEventListener('click', MudarTema);
botaoTemaRubro.addEventListener('click', MudarTema);

function MudarTema(target)
{
    document.body.style.background = window.getComputedStyle(target.target).backgroundColor;
    document.body.style.color = window.getComputedStyle(target.target).color;
}