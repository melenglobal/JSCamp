console.log("Merhaba gece!")
//JavaScript Type Safe değildir.
let dolarDun = 9.0
{
    let dolarDun = 10;
}
let dolarBugun = 9.2

console.log(dolarDun)

const euroDun = 11

console.log(euroDun)

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log(konutKredileri)
console.log("<ul>")

for(let i=0;i<konutKredileri.length; i++){
 console.log("<li>" + konutKredileri[i] + "</li>")
}

console.log("</ul>")