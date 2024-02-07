//parse thru the local memory string
//add stamps and names in order

//STAMPS
//Create empty stamp array the first time you open the app
var stamps;
        if(!localStorage) {
            localStorage.setItem('stamps', '[]');
        } else {
            stamps = JSON.parse(localStorage.getItem('stamps')) || [];
        }
        console.log(stamps);

//Stamp asset URLs
var stampImages = {
    Algeria: 'assets/Flags/Algeria.png',
    Australia: 'assets/Flags/Australia.png',
    Bangladesh: 'assets/Flags/Bangladesh.png',
    Brazil: 'assets/Flags/Brazil.png',
    Canada: 'assets/Flags/Canada.png',
    Croatia: 'assets/Flags/Croatia.png',
    CyprusAndGreece: 'assets/Flags/CyprusGreece.png',
    Denmark: 'assets/Flags/Denmark.png',
    Egypt: 'assets/Flags/Egypt.png',
    Finland: 'assets/Flags/Finland.png',
    Germany: 'assets/Flags/Germany.png',
    HongKong: 'assets/Flags/HongKong.png',
    India: 'assets/Flags/India.png',
    Indonesia: 'assets/Flags/Indonesia.png',
    Italy: 'assets/Flags/Italy.png',
    Jamaica: 'assets/Flags/Jamaica.png',
    Japan: 'assets/Flags/Japan.png',
    Jordan: 'assets/Flags/Jordan.png',
    Maldives: 'assets/Flags/Maldives.png',
    Mexico: 'assets/Flags/Mexico.png',
    Morocco: 'assets/Flags/Morocco.png',
    Netherlands: 'assets/Flags/Netherlands.png',
    NewZealand: 'assets/Flags/NewZealand.png',
    Pakistan: 'assets/Flags/Pakistan.png',
    Palestine: 'assets/Flags/Palestine.png',
    Panama: 'assets/Flags/Panama.png',
    Philippines: 'assets/Flags/Philippines.png',
    Poland: 'assets/Flags/Poland.png',
    Portugal: 'assets/Flags/Portugal.png',
    SaudiArabia: 'assets/Flags/SaudiArabia.png',
    Scotland: 'assets/Flags/Scotland.png',
    Serbia: 'assets/Flags/Serbia.png',
    Singapore: 'assets/Flags/Singapore.png',
    SlovakRepublic: 'assets/Flags/SlovakRepublic.png',
    SouthAfrica: 'assets/Flags/SouthAfrica.png',
    SouthKorea: 'assets/Flags/SouthKorea.png',
    Spain: 'assets/Flags/Spain.png',
    Switzerland: 'assets/Flags/Switzerland.png',
    Thailand: 'assets/Flags/Thailand.png',
    TrinidadAndTobago: 'assets/Flags/TrinidadAndTobago.png',
    Tunisia: 'assets/Flags/Tunisia.png',
    Turkiye: 'assets/Flags/Turkiye.png',
    UAE: 'assets/Flags/UAE.png',
    USA: 'assets/Flags/USA/png',
    Venezuela: 'assets/Flags/Venezuela.png',
    Wales: 'assets/Flags/Wales.png',
    Yemen: 'assets/Flags/Yemen.png',
};

for(s in stamps) {
    var img = document.createElement("img");
    img.className = "stamp";
    var txt = document.createElement("h3");
    txt.className = "country";

    console.log("assets/stamps/" + stamps[s] + ".png");
    img.src = "/assets/stamps/" + stamps[s] + ".png";
    console.log(img.href);
    img.alt = stamps[s] + " Stamp";

    var newStr = stamps[s].split("-").join(" ");
    txt.innerHTML = newStr;

    document.body.appendChild(img);
    document.body.appendChild(txt);
}