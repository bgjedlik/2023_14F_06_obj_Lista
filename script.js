import countries from "./countries.js";
import { showCountryTable } from './ui.js';

const countryName = document.querySelector('#country-name');

function onCountryNameChange(event){
    // console.log(event.target.value);
    const filteredCountryList = countries.filter( x => x.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    showCountryTable(filteredCountryList);
}


showCountryTable(countries);


countryName.addEventListener('input',onCountryNameChange);