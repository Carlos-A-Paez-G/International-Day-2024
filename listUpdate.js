//all the countries in alphabetical order
var allCountries = [
    'ParentTeam',
    'Algeria',
    'Australia',
    'Bahrain',
    'Bangladesh',
    'Brazil',
    'Canada',
    'China',
    'Colombia',
    'Croatia',
    'CzechRepublic',
    'Denmark',
    'Egypt',
    'Finland',
    'France',
    'Germany',
    'GreeceAndCyprus',
    'HongKongSAR',
    'India',
    'Indonesia',
    'Ireland',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Lebanon',
    'Maldives',
    'Mexica',
    'Morocco',
    'Netherlands',
    'NewZealand',
    'Pakistan',
    'Palestine',
    'Philippines',
    'Poland',
    'Portugal',
    'SaudiArabia',
    'Scotland',
    'Serbia',
    'Singapore',
    'SlovakRepublic',
    'SouthAfrica',
    'SouthKorea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'Tunisia',
    'Türkiye',
    'Venezuela',
    'UAE',
    'Ukraine',
    'USA',
    'Yemen'
];

var stamps;
    if(!localStorage) {
        localStorage.setItem('stamps', '[]');
    } else {
        stamps = JSON.parse(localStorage.getItem('stamps')) || [];
    }

function checkObtained(txt) {
    for (s in stamps) {
        if(txt == stamps[s]) {
            return true;
        }
    }

    return false;
}

var countryList = document.createElement('ul');

for(c in allCountries) {
    var country = document.createElement('li');
    country.className = 'country-listing';

    if(checkObtained(allCountries[c])) {
        country.style.textDecoration = 'line-through';
    }

    country.innerHTML = allCountries[c];
    // console.log(country);

    countryList.appendChild(country);
}

document.body.appendChild(countryList);