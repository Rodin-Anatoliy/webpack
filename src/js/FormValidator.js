export class FormValidator {

	constructor(popup, errorMessages) {
		this.popup = popup;
		this.form = popup.querySelector('.popup__form');
		this.button = popup.querySelector('.button');
		this.errorMessages = errorMessages;
	}

	checkInputValidity = (input) => {

		input.setCustomValidity("");
		if (input.validity.valueMissing) {
			input.setCustomValidity(this.errorMessages.empty);
			return false
		}
		if (input.validity.typeMismatch && input.type === 'url') {
			input.setCustomValidity(this.errorMessages.wrongUrl);
			return false
		}
		if (input.validity.patternMismatch) {
			input.setCustomValidity(this.errorMessages.wrongLength);
			return false
		}
		return input.checkValidity();
	}

	setErrorMessage(input, check) {

		const errorElem = input.closest('.popup__form').querySelector(`#error-${input.id}`);

		this.checkInputValidity(input);

		if (check === false) {
			errorElem.textContent = '';
		} else {
			errorElem.textContent = input.validationMessage;
		}
	
	}

	setSubmitButtonState(button, state) {

		if (state) {
			button.removeAttribute('disabled');
			button.classList.add(`popup__button_active`);
		} else {
			button.setAttribute('disabled', true);
			button.classList.remove(`popup__button_active`);
		}

	}

	clearForm() {
		const inputs = [...this.form.elements];
	
		inputs.forEach((input) => {
			if (input.type !== 'submit' && input.type !== 'button') {
				this.setErrorMessage(input, false);
			};
		});
		if (this.popup.classList.contains('popup_edit')) {
			this.setSubmitButtonState(this.button, true);
		} else {
			this.setSubmitButtonState(this.button, false);
		}
	
	}

	setEventListeners() {

		this.form.addEventListener('input', (event) => {
			const [...inputs] = this.form.elements;

			this.setErrorMessage(event.target, true);
		
			if (inputs.every(this.checkInputValidity)) {
				this.setSubmitButtonState(this.button, true);
			} else {
				this.setSubmitButtonState(this.button, false);
			}
		});

		this.popup.querySelector('.popup__close').addEventListener('click', () => this.clearForm());

		document.body.addEventListener('keydown', (event)=> {
			if (event.key === "Escape" && this.popup.classList.contains('popup_is-opened')) {
				this.clearForm();
			}
		});

	}

}