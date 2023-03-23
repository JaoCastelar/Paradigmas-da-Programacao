// function somar(a, b) {
//     return a + b;
// }

// let resultado = somar(10, 20);

// console.log(resultado);

// let somar = (a, b) => a + b;

// let resultado = somar(10, 20);

// console.log(resultado);

// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => console.log("Clicou no botão"));

// function soAceitaPar (num){
//     let p = new Promise((resolve, reject) => {
//         if (num % 2 == 0){
//             resolve("É par");
//         }else{
//             reject("Não é par");
//         }
//     });
//     return p;
// }

// function dividePelaMetade (num) {
//     let p = new Promise((resolve, reject) => {
//         if(num != 0){
//             resolve(num / 2); 
//         }else{
//             reject("O número não pode ser 0");
//         }
//     });
//     return p;
// }

// console.log("----------Inicio----------");

// let num  = 10;

// soAceitaPar(num)
//     .then(() => dividePelaMetade(num))
//     .then((metade) => console.log(metade))
//     .catch((erro) => console.log(erro));

// // console.log(soAceitaPar(num));

// console.log("----------Fim----------");
