class Personnage {
  constructor(race, nom, prenom, age, arme) {
    this.race = race;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.arme = arme;
  }
}

let creation = document.getElementById('creation');
let Divpersonnage = document.getElementById('personnage');
let Divarme = document.getElementById('arme')
let cardContent = document.getElementById('card-content');
let form = document.getElementById('personnage-form');
let ArmesHumain = ['Epée', 'Hache', 'Baguette'];
let ArmesOrc = ['Epée', 'Hache', 'Masse', 'Main droite', 'Main gauche'];
let ArmesElfe = ['Epée', 'Arc', 'Baguette'];


function createInfos(personnage) {
    let nom = document.createElement('h4');
    let age = document.createElement('h4');
    let race = document.createElement('h4');
    let arme = document.createElement('h4');
    arme.setAttribute('id', 'arme-content');
    arme.textContent = 'Votre arme :';

    nom.textContent = personnage.nom + ' ' + personnage.prenom;
    age.textContent = 'age :' + personnage.age;
    race.textContent = 'race : ' +personnage.race;

    cardContent.appendChild(nom);
    cardContent.appendChild(age);
    cardContent.appendChild(race);
    cardContent.appendChild(arme);
}

function createOptions(tableauRace) {
    
    tableauRace.forEach(option => {
        let optionsDiv = document.createElement('option');
        optionsDiv.innerHTML = option;
        optionsDiv.value = option;
        Divarme.appendChild(optionsDiv);
    });
    
}   

function createWeapon(personnage) {
    
    switch (personnage.race){
        case 'humain':
            tableauRace = ArmesHumain;
            break;
        case 'orc': 
            tableauRace = ArmesOrc;
            break;
        case 'elf': 
            tableauRace = ArmesElfe;
            break;
        default: 
            tableauRace = 'error, veuillez choisir un personnage';
    }
    createOptions(tableauRace);
    document.getElementById('personnage-img').src = 'assets/img/'+personnage.race+'.png';
}



function displayCharacter() {
  creation.remove();
  Divpersonnage.style.display = 'block';
}



form.addEventListener('submit', function (e) {
  e.preventDefault();

  let nom = document.getElementById('nom').value;
  let race = document.getElementById('race').value;
  let prenom = document.getElementById('prenom').value;
  let age = document.getElementById('age').value;

  let personnage = new Personnage(race, nom, prenom, age, null);
  console.log(personnage);
  displayCharacter();
  createWeapon(personnage);
  createInfos(personnage);
});

Divarme.addEventListener('change',function(){
    document.getElementById('arme-content').textContent = 'Votre arme : '+ Divarme.value;
})