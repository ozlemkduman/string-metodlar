let dizi=["Hakan","Emre","Gürcan","Efe","Kadir"]
let dizi2=["11","22","33","44","55"]
let ad="          Özlem karaduman çocuk besliyor. Onun iki çocuk sahibi olması annesinin melami oluşundan kaynaklıdır."
// slice // verilen iki parametre arasındaki değeri alır. tek parametre verilirse o indexten sonraki değerleri alır.

  console.log(ad.slice(5,10))
  console.log(ad.slice(5));

// length // değişkenin değer uzunluğunu verir

  console.log(ad.length);

// substring // değişkenin verilen iki parametre arası değeri alır

  console.log(ad.substring(7,10));


// substr // verilen ilk parametre ile başlangıç indexi belirlenir ve  verilen ikinci parametre kadar değer alınır. tek parametre de çalışır.  Eğer -1 gibi negatir parametre verilirse değişkenin sondaki değerinden başlar

  console.log(ad.substr(5,5));

// replace // verilen parametre ile değişkenin içerisindeki belirtilen değeri değiştirir

    let mitat= ad.replace("kara","Mithat")
    console.log(mitat);

// replaceAll // verilen parametre ile değişkenin içerisindeki tüm değerleri, verilen ikinci parametre ile değiştirir.  

    console.log(ad.replaceAll("çocuk", "saftirik"));

// concat // verilen parametre değerini değişkenin sonuna ekler.

   console.log(ad.concat(" muhteşem canlı :P"));

// toUpperCase // bu metod değişkenin tüm karakterlerinin BÜYÜK HARF ile yazılmasını sağlar.

    console.log(ad.toUpperCase());

// toLowerCase // bu metod değişkenin tüm karakterlerinin küçük harf ile yazılmasını sağlar.

    console.log(ad.toLowerCase()); 
   
// trim // değişkenin baş ve sondaki boşlukları geçersiz sayarak yeni bir string değişken oluşturur.
    
    let newAd=ad.trim();
    console.log(newAd);

// trimStart() // değişkende başta bulunan boşlukları geçersiz sayarak yeni bir string değişken oluşturur.
   
    let newAdStart=ad.trimStart();
    console.log(newAdStart);

// trimStart() // değişkende başta bulunan boşlukları geçersiz sayarak yeni bir string değişken oluşturur.
   
    let newAdLast=ad.trimEnd();
    console.log(newAdLast);

// padStart() // değişkeni başından itibaren verilen ilk parametre kadar karaktere  desteklemek için dolgu yapılacak karakteri belirler.
    
    console.log(ad.padStart(120,"/"));

// padEnd() // değişkeni sondan itibaren verilen ilk parametre kadar karaktere  desteklemek için dolgu yapılacak karakteri belirler.
    
    console.log(ad.padEnd(120,"x")); 

// charAt() // belirtilen dizindeki karakteri döndürür. tek parametre alır

    console.log(ad.charAt(18));

// charCodeAt() //   belirtilen dizindeki karakterin unicodunu bize döndürür

    console.log(ad.charCodeAt(18));

// split() // verilen parametreyi değişkende seperatör olarak kullanarak dizi oluşturur.

    console.log(ad.split(" "));
    console.log(ad.split("çocuk"));