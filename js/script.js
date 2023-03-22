// Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
// Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
// Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
// Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
// Scott    Estrada	Developer	              scott-estrada-developer.jpg
// Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg

const team1 = {
    name : 'Wayne',
    surname : 'Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
};

const team2 = {};
const team3 = {};
const team4 = {};
const team5 = {};
const team6 = {};

for(let key in team1){
    team2[key] = team1[key];
    team3[key] = team1[key];
    team4[key] = team1[key];
    team5[key] = team1[key];
    team6[key] = team1[key];
}

team2.name = 'Angela';
team2.surname = 'Caroll';
team2.role = 'Caroll';
team2.image = 'Caroll';