function NumObjects(Na1, Na2, Na3) {
  this.Na1 = Na1;
  this.Na2 = Na2;
  this.Na3 = Na3;
}


//a


const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']



function getGiftsToRefill(a1, a2, a3) {
  let d = {};
  let listaA = [a1, a2, a3];
  let lis = a1.concat(a2, a3);
  let uniquelis = [...new Set(lis)];
  let ArrayReturn =[]; 
  for (let j of uniquelis.length) {
    let Num = [0,0,0];

    for (let i = 0; i < 3; i++) {

      for (let k of listaA[i].length) {
        if(listaA[i][k]==uniquelis[j] )
          Num[i]++; 
      }
    }
    d[uniquelis[j]] = new NumObjects(Num[0], Num[1], Num[2]);
  }

  for (let i in d){
    if(d[i].Na1 + d[i].Na2 ==0 || d[i].Na1 + d[i].Na3 ==0 || d[i].Na2 + d[i].Na3 ==0)
      ArrayReturn.push(i); 
}

  return ArrayReturn; 
}