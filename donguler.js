// Döngüler //

// For //

let aile = [
  "Ferda",
  "zeYcan",
  "Gürcan",
  "Emre",
  "ÖzleM",
  "haKan",
  "Efe",
  "kaDir",
];

for (i = 0; i < aile.length; i++) {
  console.log(aile[i]);
}

let count = 0;

for (i = 20; i <= 40; i++) {
  console.log(i);
}

for (i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (i = aile.length; i >= 0; i--) {
  console.log(aile[i]);
}

// while // --olana kadar çalış komutu vermektir

let sayac = 5;

for (let i = 0; i <= 10; i++) {
  while (i <= sayac) {
    console.log("hey");
    i++;
  }
  console.log(i);
}

while (sayac <= 10) {
  console.log(sayac);
  sayac++;
}

// forEach // --herbiri için anlamında denilebilir

aile.forEach((fert) => console.log(fert));



aile.forEach(function (fert, index, array) {
  console.log(fert + " bu kişi " + index + " da yer alır");
  console.log(array);
});

// do While //  şart aramadan 1 kez çalışır ve sonra şart uyarsa döngüye devam eder

let pc=0
do{
    console.log("aile");
    pc++;

}while(pc<=8)




// filter //   filtreleme yöntemidir

let uzun = aile.filter((fert) => fert.length > 5);
console.log(uzun);

// map //   forEach e çok benzerdir fakat forEach'in aksine döndürülen değer değişken içerisine atanır

let upperAile = aile.map((fert) => fert.toUpperCase());

console.log(upperAile);

let firstUpperAile = aile.map((fert) => (
    fert[0].toUpperCase()+fert.slice(1).toLowerCase()
));

console.log(firstUpperAile);


let lowerAile=aile.map(fert=>(fert.toLowerCase()))

console.log(lowerAile);





