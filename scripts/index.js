// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(cardInformation, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = cardInformation.link;
    cardElement.querySelector('.card__title').textContent = cardInformation.name;
    deleteCard(cardElement);
    placesList.append(cardElement);
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard (cardElement) {
    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.closest('.places__item');
        console.log(listItem);
        listItem.remove();
    });
}

// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i], deleteCard);
};
