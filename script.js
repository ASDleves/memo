window.addEventListener("load",function (){
  //ide jön a kód
})


$(document).ready(function(){
 
})

//hozz létre egy listát a képekkel
// kép elég!
const LIST = [
"kepek/kep1.jpg",
"kepek/kep2.jpg",
"kepek/kep3.jpg",
"kepek/kep4.jpg",
"kepek/kep5.jpg",
"kepek/kep6.jpg",
"kepek/kep1.jpg",
"kepek/kep2.jpg",
"kepek/kep3.jpg",
"kepek/kep4.jpg",
"kepek/kep5.jpg",
"kepek/kep6.jpg",
];
let lepesszam = 0;
var kivalasztottak = [];
const KIVALASZTOTTKEPEK = [];
const KIVALASZTOTTKEPEK_MASODIK = [];
let db = 0;
let szamlalo = 0;
let kepdb = 0
var startTime = 0
var endTime = 0
var seconds = 0
var elozojatek = 0
var legeneralt = 0
var jatszma = 0
$(function () {
létrehozás();
//ide jön a kód
/**1 .tedd ki a képeket a felső sectionbe
 * minden kép külön div-be kerüljön
 */
keveres(LIST)
const FELSOELEM = $("#felso");
let tartalom = osszeAllit();
FELSOELEM.append(tartalom);

/**kisképekre kattintás */
//fogd meg a kisképeket
const FELSOKEPEK = $("#felso img");
FELSOKEPEK.on("click", kepreKattintas);
});

function kepreKattintas() {
const aktKep = event.target;
//irasd ki a konzolra az aktuális elem src attributumát!

console.log(aktKep.id);
console.log($(aktKep).attr("id"));
/**Írjuk ki, hogy hányadik képre kattintottunK?  */
/**kicseréljk a kép src */
aktKep.src = LIST[aktKep.id];
KIVALASZTOTTKEPEK.push($(aktKep).attr("id"));
KIVALASZTOTTKEPEK_MASODIK.push($(aktKep).attr("id"));

db++;
if (db == 2) {
  KIVALASZTOTTKEPEK_MASODIK[0] = LIST[KIVALASZTOTTKEPEK[0]]
  KIVALASZTOTTKEPEK_MASODIK[1] = LIST[KIVALASZTOTTKEPEK[1]]
  if (KIVALASZTOTTKEPEK_MASODIK[0] == KIVALASZTOTTKEPEK_MASODIK[1]){
    console.log(KIVALASZTOTTKEPEK_MASODIK[0],KIVALASZTOTTKEPEK_MASODIK[1])
    kepeltüntetes(KIVALASZTOTTKEPEK[0])
    kepeltüntetes(KIVALASZTOTTKEPEK[1])
    szamlalo++;
  }
  db = 0;
}else{
visszafordit();  
}
lepesszam++;
if (lepesszam == 1){
  start()
}
if (szamlalo == 6){
  console.log("lépéseid száma",lepesszam/2)
  lepeskiiras()
  lepesszam = 0
  szamlalo = 0
  jatszma++
  end()
  if (legeneralt == 0){
    tarolt()
    legeneralt++
  }
  
  if (elozojatek == 0){
    elozojatek = seconds
    tarolas()
  }
  if (seconds < elozojatek){
    elozojatek = seconds
    tarolas()
  }
  
}
}

function visszafordit() {
//visszaállítjuk az src-t a háttérre, amelyikre kattintottunk
console.log(KIVALASZTOTTKEPEK);

setTimeout(function () {
  const FELSOKEPEK = $("#felso img");
  let aktkep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
  console.log(aktkep);
  $(aktkep).attr("src", "kepek/hatter.jpg");
  aktkep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
  $(aktkep).attr("src", "kepek/hatter.jpg");
  
  KIVALASZTOTTKEPEK.pop();
  KIVALASZTOTTKEPEK.pop();
}, 1000);
kepdb = 0;
}

function osszeAllit() {
//**összállítjuk a szöveget, ami megjeleníti a képket */
let txt = "";
for (let index = 0; index < LIST.length; index++) {
  txt += `<div><img src="kepek/hatter.jpg" alt="" id="${index}"></div>`;
}
console.log(txt);
return txt;
}
function keveres(array) {
array.sort(() => Math.random() - 0.5);
}
function kepeltüntetes(id) {
  var img = document.getElementById(id);
  img.style.display = "none";
}

function lepeskiiras(){
var x = document.createElement("ARTICLE");
x.setAttribute("id", "myArticle");
document.body.appendChild(x);

var heading = document.createElement("H1");
var txt1 = document.createTextNode("Lépéseid");
heading.appendChild(txt1);
document.getElementById("myArticle").appendChild(heading);

var para = document.createElement("P");
var txt2 = document.createTextNode("Ennyi lépésből találtad meg az összes párt: "+lepesszam/2);
para.appendChild(txt2);
document.getElementById("myArticle").appendChild(para);

}

function létrehozás(){
const divElement = document.getElementById('jatek');

const section1 = document.createElement('section');
section1.setAttribute('id', 'felso');

const section2 = document.createElement('section');
section2.setAttribute('id', 'also');

divElement.appendChild(section1);
divElement.appendChild(section2);
}
function jatekkezdes(){
jatszma = 1
torles()
$(function () {
  létrehozás();
  //ide jön a kód
  /**1 .tedd ki a képeket a felső sectionbe
   * minden kép külön div-be kerüljön
   */
  keveres(LIST)
  const FELSOELEM = $("#felso");
  let tartalom = osszeAllit();
  FELSOELEM.append(tartalom);

  /**kisképekre kattintás */
  //fogd meg a kisképeket
  const FELSOKEPEK = $("#felso img");
  FELSOKEPEK.on("click", kepreKattintas);
});
}
function torles() {
const list = document.getElementById("jatek");
list.removeChild(list.firstElementChild);
list.removeChild(list.firstElementChild);
const idomeres = document.getElementById("ido");
if (jatszma == 0){
  console.log("nemlehet törölni")
}else{
  idomeres.remove()
}
const lepesszamkiir = document.getElementById("myArticle");
if (jatszma == 0){
  console.log("nemlehet törölni")
}else{
  lepesszamkiir.remove()
}
 
}
function start() {
startTime = new Date();
};
function myFunction() {

}

function end() {
endTime = new Date();
var timeDiff = endTime - startTime; //in ms
// strip the ms
timeDiff /= 1000;

// get seconds 
seconds = Math.round(timeDiff);
console.log(seconds + " seconds");
var x = document.createElement("ASIDE");
x.setAttribute("id", "ido");
document.body.appendChild(x);

var heading = document.createElement("H1");
var txt1 = document.createTextNode("Ennyi időbe telt hogy megtaláld az összes párt");
heading.appendChild(txt1);
document.getElementById("ido").appendChild(heading);

var para = document.createElement("P");
var txt2 = document.createTextNode(seconds+" másodperc");
para.appendChild(txt2);
document.getElementById("ido").appendChild(para);
}
function tarolt(){
  const legjobb = document.getElementById("kiirat")
  var cim = document.createElement("h1")
  legjobb.appendChild(cim)
  var szoveg = document.createTextNode("Jelenlegi record")
  cim.appendChild(szoveg)
}
function tarolas(){
  
  const legjobb = document.getElementById("kiirat")
  var x = document.createElement("p")
  legjobb.appendChild(x)
  x.setAttribute("id", "record")
  localStorage.setItem("eredmeny", seconds);
  document.getElementById("record").innerHTML = localStorage.getItem("eredmeny");
}