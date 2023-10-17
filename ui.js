

function showCountryTable(countryList){
    // console.log(countryList);
    const countryTableTbody = document.querySelector('.table tbody');
    countryTableTbody.innerHTML = ''; // tbody törlés
    // console.log(countryTableTbody);
    let tr = '';
    countryList.forEach(country => {
        tr += `
            <tr>
                <td>${country.name}</td>
                <td>${country.iso3}</td>
                <td>${country.capital}</td>
                <td>${country.currency_name}</td>
                <td>${country.currency_symbol}</td>
                <td>${country.region}</td>
                <td>${country.subregion}</td>
            </tr>
        `;
    });
    countryTableTbody.innerHTML = tr;
}

export { showCountryTable };