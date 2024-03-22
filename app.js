let listadestinacija=document.getElementById("lista-destinacija");
console.log(listadestinacija);

let naslov=document.getElementsByClassName("title");
console.log(naslov);

let  element=document.getElementsByTagName("li");
console.log(element);

/*query slektori 
all- svi elmenti 
samo prvi koji odgovara tom uslovu bez all*/
let wrap=document.querySelector("#wrapper");
console.log(wrap);

let destinacije=document.querySelectorAll(".naziv");
console.log(destinacije);

/*roditelj dete */
//console.log("Parent node liste destinacije je: ",listadestinacija.parentNode);
//console.log("Child nodes liste destinacien su: ", listadestinacija.childNodes);
console.log("Child nodes liste destinacien su: ", listadestinacija.children);

//siblings
//sledeci element u nivou kao i lista destinacija
console.log("Sibling liste destinacije je : ", listadestinacija.nextSibling);
//prvi bilo koji html element
console.log("Sibling liste destinacije je : ", listadestinacija.nextElementSibling);
//gvraca jedan prvi sledeci ali html tag 
console.log("Sibling liste destinacije je : ", listadestinacija.previousSibling);

let banner=document.querySelector("#page-banner");
console.log("Node name",banner.nodeName);//div
console.log("Node name",banner.nodeType);//1
console.log("Node name",banner.nodeValue); //null
let desinacij1=document.querySelector(".naziv");
//desinacij1.textContent="Grad svetlsoti"; //ovde ne bi bio boldovan tekst, ispisuuje sve kao karaktere kao tekst
desinacij1.innerHTML="<b>Grad svetlsoti</b>"; //bolduje tekst

//EVENT TAGS
let dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);
Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click",function(e){
        //nadji svaku koja je kliknuta
        //nadji parent , nadji onaj koji je kliknut e.target naso je obrisi
        const li=e.target.parentNode;
        let ul=li.parentNode;//nadji listu
        ul.removeChild(li);//obrisi stavku liste
    })//dogadjaj koji osluskujem,fja koja se poziva kad se desi dodgadjaj,e ima vrednost klik
})

//za forme .forms[idForme]-tacno ta forma
//a.preventDefault -nemoj difoltno ponasanje