const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const weekDaysList = document.querySelector('.week-days');

for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
};

// Escreva seu código abaixo.

//1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index++)
{
    let li = document.createElement('li');
    li.innerText = dezDaysList[index];
    li.className = 'day';
    if (index == 25 || index == 26 || index == 32)
    {
        li.className += ' holiday';
    }
    if (index == 5 || index == 12 || index == 19 || index == 26)
    {
        li.className += ' sexta';
    }
    weekDaysList.append(li);
}

//2

let buttonFeriados;

function criarBotaoFeriados(nomeBotao)
{
    buttonFeriados = document.createElement('button');
    buttonFeriados.innerHTML = nomeBotao;
    buttonFeriados.id = 'btn-holiday';
    let parent = document.querySelector('.buttons-container');
    parent.appendChild(buttonFeriados);
}

criarBotaoFeriados('Feriados');

//3

buttonFeriados.addEventListener('click', mudarCorFeriados);

let feriados = document.querySelectorAll('.holiday');

function mudarCorFeriados()
{
    if (feriados[0].style.background != 'red')
    {
        for (let index = 0; index < feriados.length; index++)
        {
            feriados[index].style.background = 'red';
        }
    }
    else
    {
        for (let index = 0; index < feriados.length; index++)
        {
            feriados[index].style.background = 'rgb(238,238,238)';
        }
    }
}

//4

let buttonSexta;

function criarBotaoSexta(nomeBotao)
{
    buttonSexta = document.createElement('button');
    buttonSexta.innerHTML = nomeBotao;
    buttonSexta.id = 'btn-friday';
    let parent = document.querySelector('.buttons-container');
    parent.appendChild(buttonSexta);
}

criarBotaoSexta('Sexta-Feira');

//5

buttonSexta.addEventListener('click', mudarTextoSexta);

let sextas = document.querySelectorAll('.sexta');

let numeroSextas = [4, 11, 18, 25];

function mudarTextoSexta()
{
    console.log('teste');

    if (sextas[0].innerText != 'sextou')
    {
        for (let index = 0; index < sextas.length; index++)
        {
            sextas[index].innerText = 'sextou';
        }
    }
    else
    {
        for (let index = 0; index < sextas.length; index++)
        {
            sextas[index].innerText = numeroSextas[index];
        }
    }
}

//6

let allDays = document.querySelectorAll('.day');

for (let index = 0; index < allDays.length; index++)
{
    allDays[index].addEventListener('mouseover', zoomIn)
    allDays[index].addEventListener('mouseout', zoomOut)
}

function zoomIn(origem)
{
    origem.target.style.fontSize = '25px';
}

function zoomOut(origem)
{
    origem.target.style.fontSize = '20px';
}

function adicionarTarefa(nomeTarefa)
{
    let tarefa = document.createElement('span');
    tarefa.innerText = nomeTarefa;
    let parent = document.querySelector('.my-tasks');
    parent.appendChild(tarefa);
}

adicionarTarefa('teste de tarefa');