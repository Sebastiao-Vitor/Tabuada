function Tabuada() {
  let num = window.document.getElementById('num');
  let end = document.getElementById('end')
  if (num.value.length == 0 || end.value.length == 0) {
    window.alert('[ERRO...] Confira os dados!!');
  } else {
    let n = Number(num.value);
    let e = Number(end.value);
    let x = 0;
    let r = '';
    let res = document.getElementById('resposta');
    res.innerHTML = `A tabuada do ${n} é: </br>`;
    do {
      r = n*e;
      res.innerHTML += `${x} X ${n} = ${r} </br>`;
    } while(x <= e);
  }
}