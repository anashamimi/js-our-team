// Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
// Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
// Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
// Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
// Scott    Estrada	Developer	              scott-estrada-developer.jpg
// Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg

const team = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Chief Editor',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

let message = '';

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    message += `<div class="card">
                <img src="./img/${member.image}" class="card-img-top" alt="img caroll">
                <div class="card-body text-center">
                    <h5 class="card-title">${member.name} ${member.surname}</h5>
                    <p class="card-text">${member.role}</p>
                </div>
            </div>`;
}

let cards = document.getElementById('cards');
cards.innerHTML = message;



