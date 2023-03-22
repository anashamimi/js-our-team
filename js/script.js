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
team2.role = 'Chief Editor';
team2.image = 'angela-caroll-chief-editor.jpg';

team3.name = 'Walter';
team3.surname = 'Gordon';
team3.role = 'Chief Editor';
team3.image = 'walter-gordon-office-manager.jpg';

team4.name = 'Angela';
team4.surname = 'Lopez';
team4.role = 'Social Media Manager';
team4.image = 'angela-lopez-social-media-manager.jpg';

team5.name = 'Scott';
team5.surname = 'Estrada';
team5.role = 'Developer';
team5.image = 'scott-estrada-developer.jpg';

team6.name = 'Barbara';
team6.surname = 'Ramos';
team6.role = 'Graphic Designer';
team6.image = 'barbara-ramos-graphic-designer.jpg';


console.log(team1, team2, team3, team4, team5, team6)