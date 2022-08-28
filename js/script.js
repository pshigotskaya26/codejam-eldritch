import ancients from './../assets/Ancients/index.js';
import ancientsData from './../data/ancients.js';

const ancientCard = document.querySelectorAll('.ancient-card');
let arrayOfKeysOfAncients = Object.keys(ancients);

//-------------------------DISPLAY ANCIENTS-------------------------------

//display Ancients
export const displayAncients = () => {
    for (let i = 0; i < ancientCard.length; i++) {
        ancientCard[i].style.backgroundImage = `url(${ancients[arrayOfKeysOfAncients[i]]})`;
        ancientCard[i].setAttribute('data-id', `${ancientsData[i].id}`);
    }
};

displayAncients();

//-------------------------COUNT GENERAL COUNT OF GRENN, BROWN, BLUE CARDS-------------------------------

const ancientsСontainer = document.querySelector('.ancients-container');
const difficultyContainer = document.querySelector('.difficulty-container');
let targetElementAncientCard;
let countOfGreenCards;
let countOfBlueCards;
let countOfBrownCards;
let countOfGreenCardsFromAnciant;
let countOfBrownCardsFromAnciant;
let countOfBlueCardsFromAnciant;
let idOfAncient;

//counts general count Of green cards
const getCountOfGreenCardsFromAnciant = (idOfAncient) => {
    for (let i = 0; i < ancientsData.length; i++) {
        if (ancientsData[i].id === idOfAncient) {
            countOfGreenCards = ancientsData[i].firstStage.greenCards + ancientsData[i].secondStage.greenCards + ancientsData[i].thirdStage.greenCards;
            return countOfGreenCards;
        }
    }
}

//counts general count Of brown cards
const getCountOfBrownCardsFromAnciant = (idOfAncient) => {
    for (let i = 0; i < ancientsData.length; i++) {
        if (ancientsData[i].id === idOfAncient) {
            countOfBrownCards = ancientsData[i].firstStage.brownCards + ancientsData[i].secondStage.brownCards + ancientsData[i].thirdStage.brownCards;
            return countOfBrownCards;
        }
    }
}

//counts general count Of blue cards
const getCountOfBlueCardsFromAnciant = (idOfAncient) => {
    for (let i = 0; i < ancientsData.length; i++) {
        if (ancientsData[i].id === idOfAncient) {
            countOfBlueCards = ancientsData[i].firstStage.blueCards + ancientsData[i].secondStage.blueCards + ancientsData[i].thirdStage.blueCards;
            return countOfBlueCards;
        }
    }
}
