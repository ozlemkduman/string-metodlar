// filter //   filtreleme yöntemidir

let uzun = aile.filter((fert) => fert.length > 5);
//console.log(uzun);

// map //   forEach e çok benzerdir fakat forEach'in aksine döndürülen değer değişken içerisine atanır

let upperAile = aile.map((fert) => fert.toUpperCase());

//console.log(upperAile);

let firstUpperAile = aile.map(
  (fert) => fert[0].toUpperCase() + fert.slice(1).toLowerCase()
);

//console.log(firstUpperAile);

let lowerAile = aile.map((fert) => fert.toLowerCase());

//console.log(lowerAile);

// object //

let show = [
  {
    name: "Özlem",
    age: 33,
    job: ["software devoloper"], //array
  },
  {
    name: "Efe",
    age: 11,
    job: ["student", "gamer"], //array
  },
  {
    name: "Kadir",
    age: 9,
    job: ["student", "engineer"], //array
  },
];

//console.log(show[1].job[0]);
//console.log(show[2].job[1]);
//console.log(show[1].age);

show[2].job[0] = "governor";

console.log(show[2].job[0]);

// Object ve Array Destructuring  // kullanımı

let mobilyalar = {
  marka: "ikea",
  adet: 45,
  cicizeme: "lake",
  isActive: true,
  fatura: "kesildi",
};
// obje içerisindeki keyleri globalde değişken olarak atamak istersek

let { marka, adet } = mobilyalar;
//console.log(marka, adet);
//console.log(mobilyalar);

// obje içerisindeki key isimlerini değiştirmek istersek

let { marka: nerden, adet: tane } = mobilyalar;
//console.log(mobilyalar);
//console.log(nerden, tane);

// biri değişken olarak kalan, tüm diğerlerini ise farklı obje olarak tanımlama

let { cicizeme, ...kardeslerMobilya } = mobilyalar;
//console.log(kardeslerMobilya, cicizeme);

// obje ve dizi kopyalama

let lazzoni = { ...mobilyalar };
//console.log("lazzoni: ", lazzoni, "mobilyalar: ", mobilyalar);

let diziMobilya = ["masa", "kapı", 5, 23, 500, "dolap"];

let birDiziMobilya = [...diziMobilya];

console.log(`
"mobilyalar: ", ${mobilyalar} ,
"dizi mobilya: ", ${diziMobilya},
"bir dizi mobilya ", ${birDiziMobilya}`);

console.log(mobilyalar);

//try, catch, throw // dene, eğer varsa hata ver ve devam et mantığı vardır.

let insan = true; // hatalı kod

try {
  //dene
  if (insan == true) {
    throw "burası boş"; //hatayı belirt
  }
} catch (err) {
  // hatayı yazdır/bildir
  //console.log("error");;
}

// fetch API //    datada saklanan verileri istenilen yere aktarma

fetch("data.json")
  .then(
    //then ile datayı datayı al ve bu datadan işlem yap demiş oluyoruz
    (response) => {
      //console.log(response);
      return response.json(); // response artık json dosyasını döndürüyor
    }
  )
  .then((responseJson) => {
    // then ile başka bir işlem yapma
    //console.log(responseJson);
    //console.log(responseJson.name);
    //console.log(responseJson.name.indexOf("z"));
  });

//return-break-continue

//return - fonksiyon içerisinde değer döndürmek için veya işlevi durdurmak için kullanılır.  koşula bağlı yalın halde kullanıldığında koşul sağlanıyorsa fonksiyonu durdurur. sağlanmıyorsa fonksiyona devam eder. fonksiyon dışı kullanıma uygun değildir.

let schools = [
  "Buca ortaokulu",
  "Süleyman Bilgen",
  "Metehan ilkokulu",
  "Yaşardoğu ilköğretim",
  "Profilo İlkokulu",
  "Ahi Evran"
];

whichSchool();

function whichSchool() {
  if (schools[1] == "Buca ortaokulu") {
    return;
  } else if (schools[1] == "Süleyman Bilgen") {
    console.log("süleyman");
  }
}

let classes = [
{
  name: prompt("adınızı giriniz1"),
  class: 5,
  branch: "A",
},
{
  name: prompt("adınızı giriniz1"),
  class: 5,
  branch: "A",
},
{
  name: prompt("adınızı giriniz1"),
  class: 5,
  branch: "A",
},
];

//let student = prompt("adınızı girin2");

//function myclass() {
//for (let i = 0; i < classes.length; i++) {
//  if (student != classes[i].name) {
//    return;
//  } else {
//    console.log("Hoşgeldiniz");
//  }
//}//
//let veli = "Ferda";
//console.log(veli);
//}
//
//myclass();
//
//let sayi1 = 45;
//let sayi2 = 32;
//
//function topla(param1, param2) {
//  let toplam = param1 + param2;
//  return toplam;
//}
//
//let toplanan = topla(sayi1, sayi2);
//
//console.log(toplanan);
//
//let vize = (prompt("vize notu") / 100) * 30;
//let final = (prompt("final notu") / 100) * 70;
//
//function ortalama(params1, params2) {
//  let not = params1 + params2;
//  return not;
//}
//
//let ortalamaSonuc=ortalama(vize,final);
//
//console.log(vize,final);
//console.log(ortalamaSonuc);

//break durdurma işlemi için kullanılır. koşul sağlandığında işlemi durdurur. Fakat returnden farklı olarak fonksiyon çalışmaya devam eder. 

function fun() {
  for (let i = 0; i < 10; i++) {
    
    if (i === 5) {
      console.log("i 5 oldu, döngü durdu ");
      break;
    }
    console.log(i);
  }

  console.log("bebek hakan"); // döngü durdu ama fonksiyon devam etti
}

for (let i = 0; i < classes.length; i++) {
  
  if (classes[i].name=="hakan") {
    break;
  }
  
  console.log(classes[i]);
}


fun();

//continue -  koşul sağlandığında o anki komutu atlayıp döngüye devam eder. 

function funny() {
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      
      continue;
    }
    console.log(i);
  }

  console.log("cici hakan"); // döngü koşula geldiğinde atladı ve fonksiyon devam etti
}

funny();


let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) { 
    continue;
   }
  text += i ;
}

console.log(text);


