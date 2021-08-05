let olympicsMedalTable = [
  { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
  { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
  { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
  { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
  { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
  { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
  { id: 7, country: "JAPÃO", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
  { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
  { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
  { id: 10, country: "QUÊNIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

/* eslint-disable */
Array.prototype.customFind = function (predicate) { // Aqui é a implementação do método customFind
  var find = [];
  for (var i of this) {
    if (predicate(i)) {
      find.push(i);
      return find;
    }
  }
  return null;
}

Array.prototype.customSome = function (predicate) { // Aqui é a implementação do método customSome
  var some = false;
  for (i in this) {
    if (predicate(this[i])) {
      some = true;
    }
  }
  return some;
}

Array.prototype.customFilter = function (predicate) { // Aqui é a implementação do método customFilter
  var filter = [];
  for (var i of this) {
    if (predicate(i)) {
      filter.push(i);
    }
  }
  return filter;
}

Array.prototype.customMap = function (callback) { // Aqui é a implementação do método customMap
  var map = [];
  for (var i of this) {
    map.push(callback(i));
  }
  return map;
}

Array.prototype.customReduce = function (callback, initialValue) { // Aqui é a implementação do método customReduce
  var reduce = null;
  if (initialValue != undefined) {
    reduce = callback(reduce, initialValue);
  }
  for (var i of this) {
    reduce = callback(reduce, i);
  }
  return reduce;
}

// Código modelo utilizando filter, map e reduce

const resultFilterMapReduce = olympicsMedalTable.filter(i => i.continent === "ASIA") // JAPÃO e CHINA 
  .map(i => i.gold) // 26 e 12
  .reduce((total, quantity) => total + quantity); // 38

console.log(`Medalhas de Ouro no continente Asiático: ${resultFilterMapReduce}`);


// Implemente as funções customizadas - customFilter, customMap e customReduce e verique se o retorno é igual ao do código modelo

const resultByCustomFilterMapReduce = olympicsMedalTable.customFilter(i => i.continent === "ASIA")
  .customMap(i => i.gold)
  .customReduce((total, quantity) => total + quantity);

console.log(`Resultado custom - Medalhas de Ouro no continente Asiático: ${resultByCustomFilterMapReduce}`);


/* DESAFIOS - CONCLUA AS FUNÇÕES customSome, customFind E UTILIZANDO TODAS AS FUNÇÕES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */

// 1 - Crie um algoritmo que encontre o único pais do continente Africano 
// const paisAfricano =  <seu código aqui>;
// console.log(paisAfricano);

const paisAfricano = olympicsMedalTable.customFind(element => element.continent === "AFRICA").customMap(element => element.country); // Algoritmo que acha o unico país do continente africano
console.log(`\nÚnico país do continente africano:\n`);
console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
// const medalhasPorPais =  <seu código aqui>;
// console.log(medalhasPorPais);

const medalhasPorPais = olympicsMedalTable.customMap(element => `${element.country} = ${element.gold + element.silver + element.bronze}`); // Algoritmo que retorna o total de medalhas por país
console.log(`\nNúmero do total de medalhas por país:\n`);
console.log(medalhasPorPais);

// 3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro 
// const paisesCom10MedalhasOuroNoMinimo =  <seu código aqui>;
// console.log(paisesCom10MedalhasOuroNoMinimo);

const paisesCom10MedalhasOuroNoMinimo = olympicsMedalTable.customFilter(element => element.gold >= 10).customMap(element => element.country); // Algoritmo que retorna os países que consquistaram mais que 10 medalhas de ouro
console.log(`\nPaíses com no mínimo 10 medalhas de ouro:\n`);
console.log(paisesCom10MedalhasOuroNoMinimo);

// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
// const paisesCom30MedalhasNoMinimo =  <seu código aqui>;
// console.log(paisesCom30MedalhasNoMinimo);

const paisesCom30MedalhasNoMinimo = olympicsMedalTable.customFilter(element => (element.gold + element.silver + element.bronze) >= 30).customMap(element => element.country); // Algoritmo que retorna os países que conquistaram no mínimo 30 medalhas
console.log(`\nPaíses que conquistaram no mínimo 30 medalhas:\n`);
console.log(paisesCom30MedalhasNoMinimo);

// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro 
// const paisesComPeloMenos20MedalhasDeOUro =  <seu código aqui>;
// console.log(paisesComPeloMenos20MedalhasDeOUro);

const paisesComPeloMenos20MedalhasDeOuro = [olympicsMedalTable.customFilter(element => element.continent === "AMERICA DO SUL") // Algoritmo que verifica se o continente América do Sul conquistou ao menos 20 medalhas de ouro
  .customMap(element => element.gold).customReduce((total, quantity) => total + quantity)].customSome(element => element >= 20);
console.log(`\nO continente América do Sul conquistou pelo menos 20 medalhas?\n`);
console.log(paisesComPeloMenos20MedalhasDeOuro);
