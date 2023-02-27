// Array Methods

// dizi oluşturma

let items=[]; // [] sembolleri dizi tanımlamak için yeterlidir.

// dizi eleman değiştirme

items=["Özlem", "Hakan", 33, 30];
items[2]="Gürcan";
console.log(items);

// dizinin başına eleman ekleme
//yeni değişiklik yapıldı

items.unshift(15);

console.log(items);

// dizinin sonuna eleman ekleme

items.push("Ferda");
console.log(items);

// dizinin başından eleman silme

items.shift();
console.log(items);

// dizinin sonundan eleman silme

items.pop();
console.log(items);

//diziye hem eleman eklemek hem de eleman silmek için kullanılan splice metodu vardır. 2 veya 3 parametre alabilir (2,1,"Zeycan")

items.splice(2,2,"Zeycan","Mithat",23,54,25);
// ilk parametre kaçıncı indexten sonra işlem yapacağını bildirir
// ikinci parametre kaç index sileceğini bildirir
// üçüncü parametre eklenecek değeri atar.
console.log(items);

// dizi eleman sayısını görmek

console.log(items.length);


// diziye başka bir dizinin elemanlarını ekleme

let twoItems= ["kivi", "elma"];

let totalItems=items.concat(twoItems);

console.log(totalItems);













