// filter //   filtreleme yöntemidir

let uzun = aile.filter((fert) => fert.length > 5);
console.log(uzun);

// map //   forEach e çok benzerdir fakat forEach'in aksine döndürülen değer değişken içerisine atanır

let upperAile = aile.map((fert) => fert.toUpperCase());

console.log(upperAile);

let firstUpperAile = aile.map(
  (fert) => fert[0].toUpperCase() + fert.slice(1).toLowerCase()
);

console.log(firstUpperAile);

let lowerAile = aile.map((fert) => fert.toLowerCase());

console.log(lowerAile);

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

console.log(show[1].job[0]);
console.log(show[2].job[1]);
console.log(show[1].age);

show[2].job[0] = "governor";

console.log(show[2].job[0]);

// Object ve Array Destructuring  // kullanımı

let mobilyalar = {
  marka: "ikea",
  adet: 45,
  malzeme: "lake",
  isActive: true,
  fatura: "kesildi",
};
// obje içerisindeki keyleri globalde değişken olarak atamak istersek

let { marka, adet } = mobilyalar;
console.log(marka, adet);
console.log(mobilyalar);

// obje içerisindeki key isimlerini değiştirmek istersek

let { marka: nerden, adet: tane } = mobilyalar;
console.log(mobilyalar);
console.log(nerden, tane);

// biri değişken olarak kalan, tüm diğerlerini ise farklı obje olarak tanımlama

let { malzeme, ...kardeslerMobilya } = mobilyalar;
console.log(kardeslerMobilya, malzeme);

// obje ve dizi kopyalama

let lazzoni = { ...mobilyalar };
console.log("lazzoni: ", lazzoni, "mobilyalar: ", mobilyalar);

let diziMobilya = ["masa", "kapı", 5, 23, 500, "dolap"];

let birDiziMobilya = [...diziMobilya];

console.log(`
"mobilyalar: ", ${mobilyalar} ,
"dizi mobilya: ", ${diziMobilya},
"bir dizi mobilya ", ${birDiziMobilya}`);

console.log(mobilyalar);



//try, catch, throw // dene, eğer varsa hata ver ve devam et mantığı vardır.

let insan=true;   // hatalı kod


    try{       //dene
        if(insan==true){
            throw "burası boş"  //hatayı belirt
        };
    }catch(err){   // hatayı yazdır/bildir
        console.log("error");;
    }
    
// fetch API //    datada saklanan verileri istenilen yere aktarma

fetch("data.json").then(  //then ile datayı datayı al ve bu datadan işlem yap demiş oluyoruz 
  response=>{
    console.log(response);
    return response.json();  // response artık json dosyasını döndürüyor

  }).then(responseJson=>{ // then ile başka bir işlem yapma
    console.log(responseJson);
    console.log(responseJson.name);
    console.log(responseJson.name.indexOf("z"));
  })
