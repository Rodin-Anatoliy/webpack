class Card {

	constructor(cardInfo, openImage) {
		this.cardInfo = cardInfo;
		this.openImage = openImage;
		this.card = null;
		this.buttonLike = null;
		this.buttonDelete = null;
	}

	template() {
		const templateString = `<div class="place-card">
			<div class="place-card__image">
				<button class="place-card__delete-icon"></button>
			</div>
			<div class="place-card__description">
				<h3 class="place-card__name"></h3>
				<button class="place-card__like-icon"></button>
			</div>
		</div>`;
		const elem = document.createElement('div');
		elem.insertAdjacentHTML('beforeend', templateString.trim());
		return elem.firstChild;

	}

	setEventListeners() {
		this.buttonDelete.addEventListener('click', this.remove);
		this.card.querySelector('.place-card__like-icon').addEventListener('click', this.like);
		this.card.querySelector('.place-card__image').addEventListener('click', this.openImage);
	}

	create() {
		this.card = this.template();
		this.card.querySelector('.place-card__name').textContent = this.cardInfo.name;
		this.card.querySelector('.place-card__image').style.backgroundImage = `url( ${this.cardInfo.link} )`;
		this.buttonLike = this.card.querySelector('.place-card__like-icon');
		this.buttonDelete = this.card.querySelector('.place-card__delete-icon');
		this.setEventListeners();
		return this.card;
	}

	like = () => {
		this.buttonLike.classList.toggle('place-card__like-icon_liked');
	}

	remove = () => {
		this.buttonLike.removeEventListener('click', this.like);
		this.buttonDelete.removeEventListener('click', this.remove);
		this.card.querySelector('.place-card__image').removeEventListener('click', this.openImage);
		this.card.remove();
		this.card = null;
	}

}