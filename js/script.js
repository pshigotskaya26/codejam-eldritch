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

//-------------------------WHEN WE CLICK ANCIENTS'S CONTAINER-------------------------------

//when we click on ancient's image
ancientsСontainer.addEventListener('click', (event) => {
    buttonContainer.classList.add('hidden');

    arrayOfDifficulties.forEach(item => {
        item.classList.remove('active');
    });

    deckContainer.classList.add('hidden');
    targetElementAncientCard = event.target;
    difficultyContainer.classList.remove('hidden');

    ancientCard.forEach(item => {
        item.classList.remove('active');
    });

    event.target.classList.add('active');
    idOfAncient = event.target.dataset.id;

    countOfGreenCardsFromAnciant = getCountOfGreenCardsFromAnciant(event.target.dataset.id);
    countOfBrownCardsFromAnciant = getCountOfBrownCardsFromAnciant(event.target.dataset.id);
    countOfBlueCardsFromAnciant = getCountOfBlueCardsFromAnciant(event.target.dataset.id); 
});

//-----------------------------SET BACKGROUND-IMAGE TO DECKCARD---------------------------

//set background-image to deckCard
const deckCard = document.querySelector('.deck-card');
deckCard.style.backgroundImage = "url('./../assets/mythicCardBackground.png')";

//-----------------------------WRITE ALGORITHM FOR EVERY LEVEL---------------------------

import difficulties from './../data/difficulties.js';
import greenCardsData from './../data/mythicCards/green/index.js';
import brownCardsData from './../data/mythicCards/brown/index.js';
import blueCardsData from './../data/mythicCards/blue/index.js';

const arrayOfDifficulties = document.querySelectorAll('.difficulty');
const deckContainer = document.querySelector('.deck-container');
const buttonContainer = document.querySelector('.button-container');
let resultArrayWithLevel;
let generalArrayOfCards;
let arrayOfGreenCards;
let arrayOfBrownCards;
let arrayOfBlueCards;

//set attribute data-id for difficulty
const setAttributeForDifficulty = () => {
    for (let i = 0; i < arrayOfDifficulties.length; i++) {
        arrayOfDifficulties[i].setAttribute('data-id', `${difficulties[i].id}`);
    }
};

setAttributeForDifficulty();

//get copy of array Of green cards
export const getArrayOfGreenCards = () => {
    arrayOfGreenCards = greenCardsData.slice();
    return arrayOfGreenCards;
}

//get copy of array Of brown cards
export const getArrayOfBrownCards = () => {
    arrayOfBrownCards = brownCardsData.slice();
    return arrayOfBrownCards;  
}

//get copy of array Of blue cards
export const getArrayOfBlueCards = () => {
    arrayOfBlueCards = blueCardsData.slice();
    return arrayOfBlueCards;  
}

//get random index in array
const getRandomNumb = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

//get array of unique elements if count of encient less than length of array with snowflake
const addUniqueValueInResultArray = (arr, countOfEncient) => {
    let count = 0;
    let resultArrayOfUniq = [];

    while (count < countOfEncient) {
        let randomElement = getRandomNumb(arr);
        if (!resultArrayOfUniq.includes(randomElement)) {
            resultArrayOfUniq.push(randomElement);
            count += 1;
        }
        else {
            continue;
        }
    }
    return resultArrayOfUniq;
};

//get cards with snowflake
const getCardsWithSnowflake = (arrWithFilter) => {
    return arrWithFilter.filter(item => {
        if (item.difficulty === 'easy') {
            return item;
        }
    });
}

//get normal cards
const getNormalCards = (arrWithFilter) => {
    return arrWithFilter.filter(item => {
        if (item.difficulty === 'normal') {
            return item;
        }
    });
}

//get hard cards
const getHardCards = (arrWithFilter) => {
    return arrWithFilter.filter(item => {
        if (item.difficulty === 'hard') {
            return item;
        }
    });
}

//if we choose very easy level, we leave easy and normal cards in the deck
const applyFilterForVeryEasy = () => {
    arrayOfGreenCards = getArrayOfGreenCards();
    arrayOfBrownCards = getArrayOfBrownCards();
    arrayOfBlueCards = getArrayOfBlueCards();

    //for green cards
    let arrayOfGreenCardsWithFilter = arrayOfGreenCards.filter(item => {
        if (item.difficulty === 'easy' || item.difficulty === 'normal') {
            return item;
        }
    });

    //for brown cards
    let arrayOfBrownCardsWithFilter = arrayOfBrownCards.filter(item => {
        if (item.difficulty === 'easy' || item.difficulty === 'normal') {
            return item;
        }
    });

        //for blu cards
    let arrayOfBlueCardsWithFilter = arrayOfBlueCards.filter(item => {
        if (item.difficulty === 'easy' || item.difficulty === 'normal') {
            return item;
        }
    });

    let arrayOfGreenCardsWithSnowflake = getCardsWithSnowflake(arrayOfGreenCardsWithFilter);
    let arrayOfGreenCardsNormal = getNormalCards(arrayOfGreenCardsWithFilter);
    let arrayOfBrownCardsWithSnowflake = getCardsWithSnowflake(arrayOfBrownCardsWithFilter);
    let arrayOfBrownCardsNormal = getNormalCards(arrayOfBrownCardsWithFilter);
    let arrayOfBlueCardsWithSnowflake = getCardsWithSnowflake(arrayOfBlueCardsWithFilter);
    let arrayOfBlueCardsNormal = getNormalCards(arrayOfBlueCardsWithFilter);

    //result array which we add arrays of green, brown and blue cards in
    let resultArrayOfCards = [];

    //count  green cards with snowflake
    if (countOfGreenCardsFromAnciant <= arrayOfGreenCardsWithSnowflake.length) {
        let resultArrayOfGreenCards = addUniqueValueInResultArray(arrayOfGreenCardsWithSnowflake, countOfGreenCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfGreenCards);
    }
    //if count of green cards is fewer than count of the green cards of Ancient
    else if (countOfGreenCardsFromAnciant > arrayOfGreenCardsWithSnowflake.length) {
        let resultArrayOfGreenCardsWithSnowflake = addUniqueValueInResultArray(arrayOfGreenCardsWithSnowflake, arrayOfGreenCardsWithSnowflake.length);
        let countOfNormalCards = countOfGreenCardsFromAnciant - arrayOfGreenCardsWithSnowflake.length;
        let resultArrayOfGreenCardsWithNormal = addUniqueValueInResultArray(arrayOfGreenCardsNormal, countOfNormalCards);
        let resultArrayOfGreenCards = resultArrayOfGreenCardsWithSnowflake.concat(resultArrayOfGreenCardsWithNormal);
        resultArrayOfCards.push(resultArrayOfGreenCards);
    }

    //count brown cards with snowflake
    if (countOfBrownCardsFromAnciant <= arrayOfBrownCardsWithSnowflake.length) {
        let resultArrayOfBrownCards = addUniqueValueInResultArray(arrayOfBrownCardsWithSnowflake, countOfBrownCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfBrownCards);
    }
    //if count of brown cards is fewer than count of the brown cards of Ancient
    else if (countOfBrownCardsFromAnciant > arrayOfBrownCardsWithSnowflake.length) {
        let resultArrayOfBrownCardsWithSnowflake = addUniqueValueInResultArray(arrayOfBrownCardsWithSnowflake, arrayOfBrownCardsWithSnowflake.length);
        let countOfNormalCards = countOfBrownCardsFromAnciant - arrayOfBrownCardsWithSnowflake.length;
        let resultArrayOfBrownCardsWithNormal = addUniqueValueInResultArray(arrayOfBrownCardsNormal, countOfNormalCards);
        let resultArrayOfBrownCards = resultArrayOfBrownCardsWithSnowflake.concat(resultArrayOfBrownCardsWithNormal);
        resultArrayOfCards.push(resultArrayOfBrownCards);
    }

    //count blue cards with snowflake
    if (countOfBlueCardsFromAnciant <= arrayOfBlueCardsWithSnowflake.length) {
        let resultArrayOfBlueCards = addUniqueValueInResultArray(arrayOfBlueCardsWithSnowflake, countOfBlueCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfBlueCards);
    }
    //if count of blue cards is fewer than count of the blue cards of Ancient
    else if (countOfBlueCardsFromAnciant > arrayOfBlueCardsWithSnowflake.length) {
        let resultArrayOfBlueCardsWithSnowflake = addUniqueValueInResultArray(arrayOfBlueCardsWithSnowflake, arrayOfBlueCardsWithSnowflake.length);
        let countOfNormalCards = countOfBlueCardsFromAnciant - arrayOfBlueCardsWithSnowflake.length;
        let resultArrayOfBlueCardsWithNormal = addUniqueValueInResultArray(arrayOfBlueCardsNormal, countOfNormalCards);
        let resultArrayOfBlueCards = resultArrayOfBlueCardsWithSnowflake.concat(resultArrayOfBlueCardsWithNormal);
        resultArrayOfCards.push(resultArrayOfBlueCards);
    }
    return resultArrayOfCards;
};

//if we choose easy level, we leave easy and normal cards in the deck
const applyFilterForEasy = () => {
    arrayOfGreenCards = getArrayOfGreenCards();
    arrayOfBrownCards = getArrayOfBrownCards();
    arrayOfBlueCards = getArrayOfBlueCards();

    //for green cards
    let arrayOfGreenCardsWithFilter = arrayOfGreenCards.filter(item => {
        if (item.difficulty === 'easy' || item.difficulty === 'normal') {
            return item;
        }
    });

    //for brown cards
    let arrayOfBrownCardsWithFilter = arrayOfBrownCards.filter(item => {
        if (item.difficulty === 'easy' || item.difficulty === 'normal') {
            return item;
        }
    });

        //for blue cards
    let arrayOfBlueCardsWithFilter = arrayOfBlueCards.filter(item => {
        if (item.difficulty === 'easy' || item.difficulty === 'normal') {
            return item;
        }
    });

    //result array which we add arrays of green, brown and blue cards in
    let resultArrayOfCards = [];

    //count  green cards with snowflake and normal
    let resultArrayOfGreenCards = addUniqueValueInResultArray(arrayOfGreenCardsWithFilter, countOfGreenCardsFromAnciant);
    resultArrayOfCards.push(resultArrayOfGreenCards);

    //count brown cards with snowflake and normal
    let resultArrayOfBrownCards = addUniqueValueInResultArray(arrayOfBrownCardsWithFilter, countOfBrownCardsFromAnciant);
    resultArrayOfCards.push(resultArrayOfBrownCards);

    //count blue cards with snowflake and normal
    let resultArrayOfBlueCards = addUniqueValueInResultArray(arrayOfBlueCardsWithFilter, countOfBlueCardsFromAnciant);
    resultArrayOfCards.push(resultArrayOfBlueCards);

    return resultArrayOfCards;
};

//if we choose normal level, we leave easy, normal and hard cards in the deck
const applyFilterForNormal = () => {
    arrayOfGreenCards = getArrayOfGreenCards();
    arrayOfBrownCards = getArrayOfBrownCards();
    arrayOfBlueCards = getArrayOfBlueCards();

    //result array which we add arrays of green, brown and blue cards in
    let resultArrayOfCards = [];

    //count  green cards with snowflake and normal
    let resultArrayOfGreenCards = addUniqueValueInResultArray(arrayOfGreenCards, countOfGreenCardsFromAnciant);
    resultArrayOfCards.push(resultArrayOfGreenCards);

    //count brown cards with snowflake and normal
    let resultArrayOfBrownCards = addUniqueValueInResultArray(arrayOfBrownCards, countOfBrownCardsFromAnciant);
    resultArrayOfCards.push(resultArrayOfBrownCards);

    //count blue cards with snowflake and normal
    let resultArrayOfBlueCards = addUniqueValueInResultArray(arrayOfBlueCards, countOfBlueCardsFromAnciant);
    resultArrayOfCards.push(resultArrayOfBlueCards);
    return resultArrayOfCards;
};

//if we choose easy level, we leave easy and normal cards in the deck
const applyFilterForHard = () => {
    arrayOfGreenCards = getArrayOfGreenCards();
    arrayOfBrownCards = getArrayOfBrownCards();
    arrayOfBlueCards = getArrayOfBlueCards();

    //for green cards
    let arrayOfGreenCardsWithFilter = arrayOfGreenCards.filter(item => {
        if (item.difficulty === 'hard') {
            return item;
        }
    });

    //for brown cards
    let arrayOfBrownCardsWithFilter = arrayOfBrownCards.filter(item => {
        if (item.difficulty === 'hard') {
            return item;
        }
    });

        //for blue cards
    let arrayOfBlueCardsWithFilter = arrayOfBlueCards.filter(item => {
        if (item.difficulty === 'hard') {
            return item;
        }
    });

    //result array which we add arrays of green, brown and blue cards in
    let resultArrayOfCards = [];

    //count  green cards with hard
    if (countOfGreenCardsFromAnciant <= arrayOfGreenCardsWithFilter.length) {
        let resultArrayOfGreenCards = addUniqueValueInResultArray(arrayOfGreenCardsWithFilter, countOfGreenCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfGreenCards);
    }
    //if count of hard cards is fewer than count of the green cards of Ancient
    else if (countOfGreenCardsFromAnciant > arrayOfGreenCardsWithFilter.length) {
        let resultArrayOfGreenCardsWithHard1 = addUniqueValueInResultArray(arrayOfGreenCardsWithFilter, arrayOfGreenCardsWithFilter.length);
        let countOfhardCardsToAdd = countOfGreenCardsFromAnciant - arrayOfGreenCardsWithFilter.length;
        let resultArrayOfGreenCardsWithHard2 = addUniqueValueInResultArray(arrayOfGreenCardsWithFilter, countOfhardCardsToAdd);
        let resultArrayOfGreenCards = resultArrayOfGreenCardsWithHard1.concat(resultArrayOfGreenCardsWithHard2);
        resultArrayOfCards.push(resultArrayOfGreenCards);
    }

    //count brown cards with hard
    if (countOfBrownCardsFromAnciant <= arrayOfBrownCardsWithFilter.length) {
        let resultArrayOfBrownCards = addUniqueValueInResultArray(arrayOfBrownCardsWithFilter, countOfBrownCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfBrownCards);
    }
    //if count of brown cards is fewer than count of the brown cards of Ancient
    else if (countOfBrownCardsFromAnciant > arrayOfBrownCardsWithFilter.length) {
        let resultArrayOfBrownCardsWithHard1 = addUniqueValueInResultArray(arrayOfBrownCardsWithFilter, arrayOfBrownCardsWithFilter.length);
        let countOfhardCardsToAdd = countOfBrownCardsFromAnciant - arrayOfBrownCardsWithFilter.length;
        let resultArrayOfGreenCardsWithHard2 = addUniqueValueInResultArray(arrayOfBrownCardsWithFilter, countOfhardCardsToAdd);
        let resultArrayOfBrownCards = resultArrayOfBrownCardsWithHard1.concat(resultArrayOfGreenCardsWithHard2);
        resultArrayOfCards.push(resultArrayOfBrownCards);
    }

    //count blue cards with snowflake
    if (countOfBlueCardsFromAnciant <= arrayOfBlueCardsWithFilter.length) {
        let resultArrayOfBlueCards = addUniqueValueInResultArray(arrayOfBlueCardsWithFilter, countOfBlueCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfBlueCards);
    }
    //if count of blue cards is fewer than count of the blue cards of Ancient
    else if (countOfBlueCardsFromAnciant > arrayOfBlueCardsWithFilter.length) {
        let resultArrayOfBlueCardsWithHard1 = addUniqueValueInResultArray(arrayOfBlueCardsWithFilter, arrayOfBlueCardsWithFilter.length);
        let countOfhardCardsToAdd = countOfBlueCardsFromAnciant - arrayOfBlueCardsWithFilter.length;
        let resultArrayOfGreenCardsWithHard2 = addUniqueValueInResultArray(arrayOfBlueCardsWithFilter, countOfhardCardsToAdd);
        let resultArrayOfBlueCards = resultArrayOfBlueCardsWithHard1.concat(resultArrayOfGreenCardsWithHard2);
        resultArrayOfCards.push(resultArrayOfBlueCards);
    } 
    return resultArrayOfCards;
};

//if we choose easy level, we leave easy and normal cards in the deck
const applyFilterForVeryHard = () => {
    arrayOfGreenCards = getArrayOfGreenCards();
    arrayOfBrownCards = getArrayOfBrownCards();
    arrayOfBlueCards = getArrayOfBlueCards();

    //for green cards
    let arrayOfGreenCardsWithFilter = arrayOfGreenCards.filter(item => {
        if (item.difficulty === 'hard' || item.difficulty === 'normal') {
            return item;
        }
    });

    //for brown cards
    let arrayOfBrownCardsWithFilter = arrayOfBrownCards.filter(item => {
        if (item.difficulty === 'hard' || item.difficulty === 'normal') {
            return item;
        }
    });

        //for blue cards
    let arrayOfBlueCardsWithFilter = arrayOfBlueCards.filter(item => {
        if (item.difficulty === 'hard' || item.difficulty === 'normal') {
            return item;
        }
    });

    let arrayOfGreenCardsHard = getHardCards(arrayOfGreenCardsWithFilter);
    let arrayOfGreenCardsNormal = getNormalCards(arrayOfGreenCardsWithFilter);
    let arrayOfBrownCardsHard = getHardCards(arrayOfBrownCardsWithFilter);
    let arrayOfBrownCardsNormal = getNormalCards(arrayOfBrownCardsWithFilter);
    let arrayOfBlueCardsHard = getHardCards(arrayOfBlueCardsWithFilter);
    let arrayOfBlueCardsNormal = getNormalCards(arrayOfBlueCardsWithFilter);
  
    //result array which we add arrays of green, brown and blue cards in
    let resultArrayOfCards = [];

    //count  green cards with hard
    if (countOfGreenCardsFromAnciant <= arrayOfGreenCardsHard.length) {
        let resultArrayOfGreenCards = addUniqueValueInResultArray(arrayOfGreenCardsHard, countOfGreenCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfGreenCards);
    }
    //if count of hard cards is fewer than count of the green cards of Ancient
    else if (countOfGreenCardsFromAnciant > arrayOfGreenCardsHard.length) {
        let resultArrayOfGreenCardsWithHard = addUniqueValueInResultArray(arrayOfGreenCardsHard, arrayOfGreenCardsHard.length);
        let countOfNormalCards = countOfGreenCardsFromAnciant - arrayOfGreenCardsHard.length;
        let resultArrayOfGreenCardsWithNormal = addUniqueValueInResultArray(arrayOfGreenCardsNormal, countOfNormalCards);
        let resultArrayOfGreenCards = resultArrayOfGreenCardsWithHard.concat(resultArrayOfGreenCardsWithNormal);
        resultArrayOfCards.push(resultArrayOfGreenCards);
    }

    //count brown cards with hard
    if (countOfBrownCardsFromAnciant <= arrayOfBrownCardsHard.length) {
        let resultArrayOfBrownCards = addUniqueValueInResultArray(arrayOfBrownCardsHard, countOfBrownCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfBrownCards);
    }
    //if count of brown cards is fewer than count of the brown cards of Ancient
    else if (countOfBrownCardsFromAnciant > arrayOfBrownCardsHard.length) {
        let resultArrayOfBrownCardsWithHard = addUniqueValueInResultArray(arrayOfBrownCardsHard, arrayOfBrownCardsHard.length);
        let countOfNormalCards = countOfBrownCardsFromAnciant - arrayOfBrownCardsHard.length;
        let resultArrayOfBrownCardsWithNormal = addUniqueValueInResultArray(arrayOfBrownCardsNormal, countOfNormalCards);
        let resultArrayOfBrownCards = resultArrayOfBrownCardsWithHard.concat(resultArrayOfBrownCardsWithNormal);
        resultArrayOfCards.push(resultArrayOfBrownCards);
    }

    //count blue cards with snowflake
    if (countOfBlueCardsFromAnciant <= arrayOfBlueCardsHard.length) {
        let resultArrayOfBlueCards = addUniqueValueInResultArray(arrayOfBlueCardsHard, countOfBlueCardsFromAnciant);
        resultArrayOfCards.push(resultArrayOfBlueCards);
    }
    //if count of blue cards is fewer than count of the blue cards of Ancient
    else if (countOfBlueCardsFromAnciant > arrayOfBlueCardsHard.length) {
        let resultArrayOfBlueCardsWithHard = addUniqueValueInResultArray(arrayOfBlueCardsHard, arrayOfBlueCardsHard.length);
        let countOfNormalCards = countOfBlueCardsFromAnciant - arrayOfBlueCardsHard.length;
        let resultArrayOfBlueCardsWithNormal = addUniqueValueInResultArray(arrayOfBlueCardsNormal, countOfNormalCards);
        let resultArrayOfBlueCards = resultArrayOfBlueCardsWithHard.concat(resultArrayOfBlueCardsWithNormal);
        resultArrayOfCards.push(resultArrayOfBlueCards);
    } 
    return resultArrayOfCards;
}

