
// import allCountries from './data.js';
// console.log(allCountries);

// const my_main_div = document.getElementById('main_div');

// allCountries.map((country,index)=>{
//     console.log(index +1);
//     console.log(country.name.common);

//     const my_country_name = document.createElement('h1');

//     my_country_name.innerText = country.name.common;

//     my_main_div.appendChild(my_country_name);

//     if(Array.isArray(country.capital)){
//         console.log(country.capital[0])
//     } else {
//         console.log(" info nerasta...")
//     }    
// }
// )


import allCountries from './data.js';
console.log(allCountries);

//pasizymiu vieta i kuria js pagalba printinsiu elememtus. nuo cia prasideda darbai
const my_main_div = document.getElementById('main_div');


allCountries.map((country, index)=>{
    console.log(index +1);
    console.log(country.name.common);
    //kuriu elementa i kuri irtasysiu salies pavadinima
    const one_country_info = document.createElement('div');
    const my_country_name = document.createElement('h3');
    const my_img = document.createElement('img');
    my_img.src = country.flags.png;
    //ideduteksta, reikesme, kintamaji i sukuirta elementa
    my_country_name.innerText = country.name.common; //dar jie neisiejo i koda
    //idedu i manin div savo sukurta elementa su content
    one_country_info.appendChild(my_country_name);
    one_country_info.appendChild(my_img);
const my_country_capital = document.createElement('h3');
    if(Array.isArray(country.capital)){
        console.log(country.capital[0]);
        my_country_capital.innerText = country.capital[0];
    } else {
           console.log(" info nerasta...");
           my_country_capital.innerText = "Info nerasta..."
       }
    console.log("_______________");
    one_country_info.appendChild(my_country_capital);
    my_main_div.appendChild(one_country_info);
});

///validate

