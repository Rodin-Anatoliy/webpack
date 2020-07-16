import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
	constructor(popup, openButton) {
		super(popup);
		this.openButton = openButton;
	}

	close() {
		super.close();
		const form = this.popup.querySelector('.popup__form');
		form.reset();
	}

	setEventListeners(submitHandler, changeDate) {
		this.openButton.addEventListener('click', () => {
			this.open();
		});
		this.popup.querySelector('.popup__close').addEventListener('click', () => this.close());
		this.popup.querySelector('.popup__form').addEventListener('submit', (event) => {
			event.preventDefault();
			const form = this.popup.querySelector('.popup__form');

			if (this.popup.classList.contains('popup_edit')) {
				const userDate = {
					name: form.elements.name.value,
					job: form.elements.job.value,
				};
				changeDate(userDate)
					.then(() => {
						submitHandler(userDate);
						this.close();
					})
					.catch(error => console.log(error));

			} else {
				const cardInfo = {
					name: form.elements.name.value,
					link: form.elements.link.value,
				};
				const submit = this.popup.querySelector('.button');
				submitHandler(cardInfo, submit);
				this.close();
			}
		});

		document.body.addEventListener('keydown', (event)=> {
			if (event.key === "Escape" && this.popup.classList.contains('popup_is-opened')) {
				this.close();
			}
			
		});

	}
}