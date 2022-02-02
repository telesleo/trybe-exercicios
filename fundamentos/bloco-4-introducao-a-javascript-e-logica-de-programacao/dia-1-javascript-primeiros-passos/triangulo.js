let a = 0;
let b = -1;
let c = 180;

if (a < 0 || b < 0 || c < 0)
{
  console.log("angulos inválidos");
}
else if (a + b + c == 180)
{
  console.log(true);
}
else
{
  console.log(false);
}