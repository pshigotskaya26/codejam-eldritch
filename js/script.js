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


//-----------------------WHEN WE CLICK ON ANY DIFFICULTY
//when we clcik on any difficulty
difficultyContainer.addEventListener('click', (event) => {
    arrayOfDifficulties.forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
    const id = event.target.dataset.id;

    if (id === 'very easy') {
        resultArrayWithLevel = applyFilterForVeryEasy();
    }
    else if (id === 'easy') {
        resultArrayWithLevel = applyFilterForEasy();
    }
    else if (id === 'normal') {
        resultArrayWithLevel = applyFilterForNormal();
    }
    else if (id === 'hard') {
        resultArrayWithLevel = applyFilterForHard();
    }
    else if (id === 'very hard') {
        resultArrayWithLevel = applyFilterForVeryHard();
    }

    buttonContainer.classList.remove('hidden');
    deckContainer.classList.add('hidden');
    return resultArrayWithLevel;
});

//-----------------------------WHEN WE CLICK ON THE BUTTON 'SHUFFLE THE DECK'---------------------------

const buttonDeck = document.querySelector('.button-deck');
const lastCardNode = document.querySelector('.last-card');

let resultArrayWithLevelCopy;
let countsOfGreenCardsFirst;
let countsOfBlueCardsFirst;
let countsOfBrownCardsFirst;
let countsOfGreenCardsSecond;
let countsOfBlueCardsSecond;
let countsOfBrownCardsSecond;
let countsOfGreenCardsThird;
let countsOfBlueCardsThird;
let countsOfBrownCardsThird;
let arrayOfCardsFirstStage;
let arrayOfCardsSecondStage;
let arrayOfCardsThirdStage;
let generalArrayForStages;
let sumOfElementsForFirstStage;
let sumOfElementsForSecondStage;
let sumOfElementsForThirdStage;
let maxForFirstStage;
let maxForSecondStage;
let maxForThirdStage;

//shuffle the cards
const shuffleTheCards = (arr) => {
    for (let i = arr.length - 1; i> 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let lastElement = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = lastElement;
    }
    return arr; 
};


//assign values to variables that wil be place in the dots
const assignValuesToVariables = (id) => {
    for (let i = 0; i < ancientsData.length; i++) {
        if (ancientsData[i].id === id) {
            countsOfGreenCardsFirst = ancientsData[i].firstStage.greenCards;
            countsOfBlueCardsFirst = ancientsData[i].firstStage.blueCards;
            countsOfBrownCardsFirst = ancientsData[i].firstStage.brownCards;

            countsOfGreenCardsSecond = ancientsData[i].secondStage.greenCards;
            countsOfBlueCardsSecond = ancientsData[i].secondStage.blueCards;
            countsOfBrownCardsSecond = ancientsData[i].secondStage.brownCards;

            countsOfGreenCardsThird = ancientsData[i].thirdStage.greenCards;
            countsOfBlueCardsThird = ancientsData[i].thirdStage.blueCards;
            countsOfBrownCardsThird = ancientsData[i].thirdStage.brownCards;

            sumOfElementsForFirstStage = countsOfGreenCardsFirst + countsOfBlueCardsFirst + countsOfBrownCardsFirst;
            sumOfElementsForSecondStage = countsOfGreenCardsSecond + countsOfBlueCardsSecond + countsOfBrownCardsSecond;
            sumOfElementsForThirdStage = countsOfGreenCardsThird + countsOfBlueCardsThird + countsOfBrownCardsThird;

            maxForFirstStage = sumOfElementsForFirstStage;
            maxForSecondStage = sumOfElementsForFirstStage + sumOfElementsForSecondStage;
            maxForThirdStage = sumOfElementsForFirstStage + sumOfElementsForSecondStage + sumOfElementsForThirdStage;
        }
    }
};

//choose cards from array for 1, 2, 3 stages
const chooseCardsFromArray = (inputArray, countOfGreen, countOfBrown, counnOfBlue) => {
    let resultArray;
    let outputArray = [];
    let greenCards = inputArray[0].splice(-countOfGreen, countOfGreen);
    let brownCards = inputArray[1].splice(-countOfBrown, countOfBrown);
    let blueCards = inputArray[2].splice(-counnOfBlue, counnOfBlue);
    outputArray.push(...greenCards);
    outputArray.push(...brownCards);
    outputArray.push(...blueCards);
    return outputArray;
};

//display values in the dots
const displayValuesInTheDots = (green1, brown1, blue1, green2, brown2, blue2, green3, brown3, blue3) => {
    const currentState = document.querySelector('.current-state');
    let htmlCode = '';
    htmlCode = `
    <div class="stage-container stage-container_first">
        <span class="stage__text">First stage</span>
        <div class="dots-container">
            <div class="dot dot_green">${green1}</div>
            <div class="dot dot_brown">${brown1}</div>
            <div class="dot dot_blue">${blue1}</div>
        </div>
    </div>
    <div class="stage-container stage-container_second">
        <span class="stage__text">Second stage</span>
        <div class="dots-container">
            <div class="dot dot_green">${green2}</div>
            <div class="dot dot_brown">${brown2}</div>
            <div class="dot dot_blue">${blue2}</div>
        </div>
    </div>
    <div class="stage-container stage-container_third">
        <span class="stage__text">Third stage</span>
        <div class="dots-container">
            <div class="dot dot_green">${green3}</div>
            <div class="dot dot_brown">${brown3}</div>
            <div class="dot dot_blue">${blue3}</div>
        </div>
    </div>
    `;
    currentState.innerHTML = htmlCode;
};


//display counts of cards in the dots container
let baseCount;

//---------------------WHEN WE CLICK ON BUTTON DECK

buttonDeck.addEventListener('click', function(event) {
    baseCount = 0;
    countOfClicks = baseCount;
    
    deckCard.style.backgroundImage = "url('./../assets/mythicCardBackground.png')";
    lastCardNode.style.backgroundImage = "";
    deckContainer.classList.remove('hidden');

    resultArrayWithLevelCopy = resultArrayWithLevel.slice();

    resultArrayWithLevelCopy.forEach(item => {
        item = shuffleTheCards(item);
    });

    assignValuesToVariables(idOfAncient);
    displayValuesInTheDots(countsOfGreenCardsFirst, countsOfBrownCardsFirst, countsOfBlueCardsFirst, countsOfGreenCardsSecond, countsOfBrownCardsSecond, countsOfBlueCardsSecond, countsOfGreenCardsThird, countsOfBrownCardsThird, countsOfBlueCardsThird);

    arrayOfCardsFirstStage = chooseCardsFromArray(resultArrayWithLevelCopy, countsOfGreenCardsFirst, countsOfBrownCardsFirst, countsOfBlueCardsFirst);
    arrayOfCardsSecondStage = chooseCardsFromArray(resultArrayWithLevelCopy, countsOfGreenCardsSecond, countsOfBrownCardsSecond, countsOfBlueCardsSecond);
    arrayOfCardsThirdStage = chooseCardsFromArray(resultArrayWithLevelCopy, countsOfGreenCardsThird, countsOfBrownCardsThird, countsOfBlueCardsThird);

    shuffleTheCards(arrayOfCardsFirstStage);
    shuffleTheCards(arrayOfCardsSecondStage);
    shuffleTheCards(arrayOfCardsThirdStage);

    generalArrayForStages = [];
    generalArrayForStages.unshift(...arrayOfCardsFirstStage);
    generalArrayForStages.unshift(...arrayOfCardsSecondStage);
    generalArrayForStages.unshift(...arrayOfCardsThirdStage); 
    buttonContainer.classList.add('hidden');

});

//----------------------------WHEN WE CLICK DECKCARD----------------------------

const greenFirstNode = document.querySelector('.stage-container_first .dot_green');
const brownFirstNode = document.querySelector('.stage-container_first .dot_brown');
const blueFirstNode = document.querySelector('.stage-container_first .dot_blue');
const greenSecondNode = document.querySelector('.stage-container_second .dot_green');
const brownSecondNode = document.querySelector('.stage-container_second .dot_brown');
const blueSecondNode = document.querySelector('.stage-container_second .dot_blue');
const greenThirdNode = document.querySelector('.stage-container_third .dot_green');
const brownThirdNode = document.querySelector('.stage-container_third .dot_brown');
const blueThirdNode = document.querySelector('.stage-container_third .dot_blue');

let lastCard;
let urlOfLastCard;
let countOfClicks;
let countGreen1;
let countBrown1;
let countBlue1; 
let countGreen2;
let countBrown2;
let countBlue2;
let countGreen3;
let countBrown3;
let countBlue3;

//find last card in array of the cards
const findLastCard = (arrayOfCards) => {
    return arrayOfCards[arrayOfCards.length - 1];
};
//display card inlast card
const displayCard = (url) => {
    lastCardNode.style.backgroundImage = `url(${url})`;
};

//delete last card from array
const deleteLastCard = () => {
    generalArrayForStages.pop();
}

//decrement counter
const decrementCounter = (colorOflastCard, countOfGreen, countOfBrown, countOfBlue) => {
    if (colorOflastCard === 'green') {
        countOfGreen = countOfGreen - 1;
        return countOfGreen;
    }
    else if (colorOflastCard === 'brown') {
        countOfBrown = countOfBrown - 1;
        return countOfBrown;
    }
    else if (colorOflastCard === 'blue') {
        countOfBlue = countOfBlue - 1;
        return countOfBlue;
    }
};

let colorOflastCard;

//when we click on deck-card
deckCard.addEventListener('click', function() {
    countGreen1 = +document.querySelector('.stage-container_first .dot_green').innerHTML;
    countBrown1 = +document.querySelector('.stage-container_first .dot_brown').innerHTML;
    countBlue1 = +document.querySelector('.stage-container_first .dot_blue').innerHTML;
    countGreen2 = +document.querySelector('.stage-container_second .dot_green').innerHTML;
    countBrown2 = +document.querySelector('.stage-container_second .dot_brown').innerHTML;
    countBlue2 = +document.querySelector('.stage-container_second .dot_blue').innerHTML;
    countGreen3 = +document.querySelector('.stage-container_third .dot_green').innerHTML;
    countBrown3 = +document.querySelector('.stage-container_third .dot_brown').innerHTML;
    countBlue3 = +document.querySelector('.stage-container_third .dot_blue').innerHTML;
    countOfClicks++;

    if (countOfClicks <= maxForFirstStage) {
        lastCard = findLastCard(generalArrayForStages);
        urlOfLastCard = lastCard.cardFace;
        colorOflastCard = lastCard.color;

        displayCard(urlOfLastCard);

        if (lastCard.color === 'green') {
            countGreen1 = decrementCounter(colorOflastCard, countGreen1, countBrown1, countBlue1);
        }
        else if (lastCard.color === 'brown') {
            countBrown1 = decrementCounter(colorOflastCard, countGreen1, countBrown1, countBlue1);
        }
        else if (lastCard.color === 'blue') {
            countBlue1 = decrementCounter(colorOflastCard, countGreen1, countBrown1, countBlue1);
        }

        displayValuesInTheDots(countGreen1, countBrown1, countBlue1, countGreen2, countBrown2, countBlue2, countGreen3, countBrown3, countBlue3);  
        deleteLastCard(); 
    }

    else if (countOfClicks > maxForFirstStage && countOfClicks <= maxForSecondStage) {
        lastCard = findLastCard(generalArrayForStages);
        urlOfLastCard = lastCard.cardFace;
        colorOflastCard = lastCard.color;

        displayCard(urlOfLastCard);

        if (lastCard.color === 'green') {
            countGreen2 = decrementCounter(colorOflastCard, countGreen2, countBrown2, countBlue2);
        }
        else if (lastCard.color === 'brown') {
            countBrown2 = decrementCounter(colorOflastCard, countGreen2, countBrown2, countBlue2);
        }
        else if (lastCard.color === 'blue') {
            countBlue2 = decrementCounter(colorOflastCard, countGreen2, countBrown2, countBlue2);
        }

        displayValuesInTheDots(countGreen1, countBrown1, countBlue1, countGreen2, countBrown2, countBlue2, countGreen3, countBrown3, countBlue3); 
        deleteLastCard();
    }

    else if (countOfClicks > maxForSecondStage && countOfClicks <= maxForThirdStage) {
        lastCard = findLastCard(generalArrayForStages);
        urlOfLastCard = lastCard.cardFace;
        colorOflastCard = lastCard.color;

        displayCard(urlOfLastCard);

        if (lastCard.color === 'green') {
            countGreen3 = decrementCounter(colorOflastCard, countGreen3, countBrown3, countBlue3);
        }
        else if (lastCard.color === 'brown') {
            countBrown3 = decrementCounter(colorOflastCard, countGreen3, countBrown3, countBlue3);
        }
        else if (lastCard.color === 'blue') {
            countBlue3 = decrementCounter(colorOflastCard, countGreen3, countBrown3, countBlue3);
        }

        displayValuesInTheDots(countGreen1, countBrown1, countBlue1, countGreen2, countBrown2, countBlue2, countGreen3, countBrown3, countBlue3); 
        deleteLastCard();  
    }

    if (countGreen1 === 0 && countBrown1 === 0 && countBlue1 === 0) {
        document.querySelector('.stage-container_first .stage__text').classList.add('active');
    }
    if (countGreen2 === 0 && countBrown2 === 0 && countBlue2 === 0) {
        document.querySelector('.stage-container_second .stage__text').classList.add('active');
    }
    if (countGreen3 === 0 && countBrown3 === 0 && countBlue3 === 0) {
        document.querySelector('.stage-container_third .stage__text').classList.add('active');
    }
    if (generalArrayForStages.length === 0) {
        deckCard.style.backgroundImage = "";
    }
});


