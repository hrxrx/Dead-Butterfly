import allCountries from './data.js';
console.log(allCountries);
console.log("labas")
//pasizymiu vieta i kuria js pagalba printinsiu elememtus. nuo cia prasideda darbai
const naujas_divas = document.getElementById('main_div');


allCountries.map((country, index)=>{

    console.log(index +1);
    console.log(country.name.common);
    //kuriu elementa i kuri irtasysiu salies pavadinima
    const naujas_divas = document.createElement ('div');
    const my_country_name = document.createElement ('h1');
    const my_img = document.createElement('img');
    my_img.src = country.flags.png;

    //ideduteksta, reikesme, kintamaji i sukuirta elementa
    my_country_name.innerText = country.name.common; //dar jie neisiejo i koda
    //idedu i manin div
    naujas_divas.appendChild(my_country_name);
    naujas_divas.appendChild(my_img);

    naujas_divas.appendChild(naujas_divas);

const my_country_capital = document.createElement('h3');
    if(Array.isArray(country.capital)){
        console.log(country.capital[0]);
        my_country_capital.innerText = country.capital[0];
    } else {
           console.log(" info nerasta...");
           my_country_capital.innerText = "Info nerasta..."
       }
    console.log("_______________");
    ///one_country_info.appendChild(my_country_capital);
    naujas_divas.appendChild(one_country_info);

    naujas_divas.appendChild(my_country_name);


});




