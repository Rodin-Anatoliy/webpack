export class CardList {

	constructor(container, createCard) {
		this.container = container;
		this.createCard = createCard;
	}

	addCard(cardElement) {
		this.container.appendChild(cardElement);
	}

	render(initialCardsInfo) {
		initialCardsInfo.forEach((obj) => {
			this.addCard(this.createCard(obj))
		});
	}

}