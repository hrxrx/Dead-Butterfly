import allCountries from './data.js';
console.log(allCountries);

//pasizymiu vieta i kuria js pagalba printinsiu elememtus. nuo cia prasideda darbai
const my_main_div = document.getElementById('main_div');


allCountries.map((country, index) =>{

    console.log(index +1);
    console.log(country.name.common);

    //kuriu elementa i kuri irtasysiu salies pavadinima
    const my_country_name = document.createElement ('h2');
    const my_img = document.createElement('img');
    my_img.src = country.flags.png;
    ///
    //ideduteksta, reikesme, kintamaji i sukuirta elementa
    my_country_name.innerText = country.name.common; //dar jie neisiejo i koda
//idedu i manin div
    naujas_divas.appendChild(my_country_name);
    naujas_divas.appendChild(my_img);

    my_main_div.appendChild(my_country_name);
    


    if(Array.isArray(country.capital)) {
        console.log(console.log(country.capital[0]))
       } else {
           console.log(" info nerasta...")
       }
       console.log("_______________")
});


