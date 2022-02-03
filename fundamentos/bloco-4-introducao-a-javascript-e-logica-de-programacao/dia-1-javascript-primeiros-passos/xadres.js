let peca = "rEi";
peca = peca.toLowerCase();

switch (peca)
{
  case "cavalo":
    console.log("L.");
    break;
  case "bispo":
    console.log("diagonais.");
    break;
  case "rei":
    console.log("uma casa pra qualquer direção.");
    break;
  case "rainha":
    console.log("todas as direções.");
    break;
  case "torre":
    console.log("vertical e horizontal.");
    break;
  case "peão":
    console.log("uma ou duas casas pra frente, uma casa diagonal pra frente se eliminar peça inimiga.");
    break;
  default:
    console.log("invalido.");
}