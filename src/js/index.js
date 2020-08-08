
import {Card} from './Card.js';
import {CardList} from './CardList.js';
import {PopupWithForm} from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js';
import {UserInfo} from './UserInfo.js';
import {FormValidator} from './FormValidator.js';
import {Api} from './Api.js';

(() => {
	const placesList = document.querySelector('.places-list');

	const buttonOpenPopup = document.querySelector('.user-info__button');
	const buttonOpenEditPopup = document.querySelector('.user-info__edit-button');

	const popupAddCard = new PopupWithForm(document.querySelector('.popup'), buttonOpenPopup);
	const popupEditInfo = new PopupWithForm(document.querySelector('.popup_edit'), buttonOpenEditPopup);
	const popupImage = new PopupWithImage(document.querySelector('.popup_image'));

	const openImage = (event) => popupImage.eventListener(event);
	const createCard = (obj) => new Card(obj, openImage).create();
	const cardList = new CardList(placesList, createCard);

	const userPhoto = document.querySelector('.user-info__photo');
	const userName = document.querySelector('.user-info__name');
	const userJob = document.querySelector('.user-info__job');
	const userInfo = new UserInfo(userName, userJob, userPhoto, popupEditInfo);
	const errorMessages = {
		empty: 'Это обязательное поле',
		wrongLength: 'Должно быть от 2 до 30 символов',
		wrongUrl: 'Здесь должна быть ссылка',
	};

	const formAddCardValidator = new FormValidator(popupAddCard.popup, errorMessages);
	const formEditInfoValidator = new FormValidator(popupEditInfo.popup, errorMessages);
	const editInfoSubmitHandler = (obj) => userInfo.updateUserInfo(obj);
	const addCardSubmitHandler = (obj, submit) => {
		cardList.addCard(createCard(obj));
		formAddCardValidator.setSubmitButtonState(submit, false);
	}
	
	const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort11' : 'https://praktikum.tk/cohort11';
	const infoForFetch = {
		baseUrl: serverUrl,
		headers: {
			authorization: '4b8d1146-4df6-423d-8a49-5b54f6b382d9',
			'Content-Type': 'application/json'
		}
	}
	
	
	const api = new Api(infoForFetch);
	const changeInfo = (obj) => api.patchUserProfile(obj);

	api.getData('cards')
		.then(cards => {
			cardList.render(cards);
		})
		.catch(error => console.log(error));

	api.getData('users/me')
		.then(user => {
			const info = {
				name: user.name,
				job: user.about,
				avatar: user.avatar
			}
			userInfo.updateUserInfo(info);
		})
		.catch(error => console.log(error));

	formAddCardValidator.setEventListeners();
	formEditInfoValidator.setEventListeners();

	popupAddCard.setEventListeners(addCardSubmitHandler);
	popupEditInfo.setEventListeners(editInfoSubmitHandler, changeInfo);

})();

import '../pages/index.css';
