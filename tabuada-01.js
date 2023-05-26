let num = window.document.getElementById('num');
let end = window.document.getElementById('end');
let res = window.document.getElementById('resposta');


function Tabuada() {
  let n = Number(num.value);
  let e = Number(end.value);
  let x = 0;
  let r = '';
  if (num.value.length == 0 || end.value.length == 0) {
    window.alert('[ERRO...] Confira os dados!!');
  } else {
    res.innerHTML = `A tabuada do ${n} é: </br>`;
    do {
      r = n*x;
      res.innerHTML += `${x} X ${n} = ${r} </br>`;
      x++;
    } while(x <= e)
  }
}