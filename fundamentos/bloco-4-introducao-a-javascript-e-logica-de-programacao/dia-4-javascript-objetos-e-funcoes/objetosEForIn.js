let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log('Bem Vinda, ' + info.personagem);

console.log(info);

for (key in info)
{
  console.log(key);
}

for (key in info)
{
  console.log(info[key]);
}

for (key in info)
{
  if(key == 'recorrente')
  {
    console.log('ambos são recorrentes');
  }
  else
  {
    console.log(info[key] + ' e ' + info2[key]);
  }
}